import faker from 'faker';
import Client from 'src/domain/client';

const fakeZipCode = () => faker.datatype
  .number({ min: 1, max: 99999999 }).toString().padStart(8, '0');
const fakePhoneNumber = () => `+55${faker.datatype
  .number({ min: 900000000, max: 999999999 })}`;

describe('Client', () => {
  let client: Client;
  beforeAll(() => {
    client = new Client({
      apiKey: process.env.SANDBOX_API_KEY,
    });
  });
  describe('transaction', () => {
    describe('when input is invalid', () => {
      it('should return an error', async () => {
        const result = await client.transaction.create({
          amount: faker.datatype.number(),
          async: false,
          capture: true,
          customer: {
            country: faker.datatype.string(),
            email: faker.fake('email'),
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            phone_numbers: [`+${faker.random.alphaNumeric(9)}`],
            documents: [{ type: 'cpf', number: faker.random.alphaNumeric(11) }],
            type: 'individual',
            external_id: faker.datatype.uuid(),
          },
          billing: {
            name: faker.datatype.string(),
            address: {
              city: faker.datatype.string(),
              country: faker.datatype.string(),
              state: faker.datatype.string(),
              street: faker.datatype.string(),
              street_number: faker.datatype.string(),
              zipcode: faker.datatype.string(),
              complementary: faker.datatype.string(),
              neighborhood: faker.datatype.string(),
            },
          },
          items: [{
            id: faker.random.word(),
            title: faker.random.word(),
            category: faker.random.word(),
            quantity: faker.datatype.number({ min: 1, max: 20 }),
            unit_price: faker.datatype.number(),
            venue: faker.random.word(),
            tangible: true,
            date: faker.date.past().toISOString(),
          }],
          card_hash: faker.random.word(),
          card_id: faker.random.word(),
          card_cvv: faker.datatype.number({ min: 1, max: 999 }).toFixed(0).padStart(3, '0'),
          card_expiration_date: faker.random.word(),
          card_holder_name: faker.random.word(),
          card_number: '9999999999999999',
          payment_method: 'credit_card',
          installments: faker.datatype.number({ min: 1, max: 5 }).toString() as any,
          reference_key: faker.random.word(),
          boleto_rules: undefined,
          local_time: new Date().toISOString(),
          session: faker.random.word(),
          shipping: {
            delivery_date: faker.date.soon().toISOString(),
            name: faker.name.firstName(),
            fee: 0,
            expedited: false,
            address: {
              city: faker.datatype.string(),
              country: faker.datatype.string(),
              state: faker.datatype.string(),
              street: faker.datatype.string(),
              street_number: faker.datatype.string(),
              zipcode: faker.datatype.string(),
              complementary: faker.datatype.string(),
              neighborhood: faker.datatype.string(),
            },
          },
        });
        const { log } = console;
        log(result);
        expect(result).toHaveProperty('errors');
        expect(result).toHaveProperty('errors');
      });
    });
  });
  describe('card payment flow', () => {
    it('should successfully process card payment', async () => {
      const result = await client.transaction.create({
        amount: faker.datatype.number(),
        async: false,
        capture: true,
        customer: {
          country: 'br',
          email: faker.internet.email().toLowerCase(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          phone_numbers: [fakePhoneNumber()],
          documents: [{ type: 'cpf', number: process.env.TEST_CPF }],
          type: 'individual',
          external_id: faker.datatype.uuid(),
        },
        billing: {
          name: faker.datatype.string(),
          address: {
            city: faker.datatype.string(),
            country: 'br',
            state: faker.datatype.string(),
            street: faker.datatype.string(),
            street_number: faker.datatype.string(),
            zipcode: fakeZipCode(),
            complementary: faker.datatype.string(),
            neighborhood: faker.datatype.string(),
          },
        },
        items: [{
          id: faker.random.word(),
          title: faker.random.word(),
          category: faker.random.word(),
          quantity: faker.datatype.number({ min: 1, max: 20 }),
          unit_price: faker.datatype.number(),
          venue: faker.random.word(),
          tangible: true,
          date: faker.date.past().toISOString().substr(0, 10),
        }],
        card_cvv: faker.datatype.number({ min: 1, max: 999 }).toFixed(0).padStart(3, '0'),
        card_expiration_date: faker.date.future(2).toISOString()
          .replace(/^\d\d(\d\d)[-](\d\d).+/, '$2$1'),
        card_holder_name: faker.random.word(),
        card_number: '4111111111111111',
        payment_method: 'credit_card',
        installments: faker.datatype.number({ min: 1, max: 5 }).toString(),
        reference_key: faker.random.word(),
        boleto_rules: undefined,
        local_time: new Date().toISOString(),
        session: faker.random.word(),
        shipping: {
          delivery_date: faker.date.soon().toISOString().substr(0, 10),
          name: faker.name.firstName(),
          fee: 0,
          expedited: false,
          address: {
            city: faker.datatype.string(),
            country: 'br',
            state: faker.datatype.string(),
            street: faker.datatype.string(),
            street_number: faker.datatype.string(),
            zipcode: fakeZipCode(),
            complementary: faker.datatype.string(),
            neighborhood: faker.datatype.string(),
          },
        },
      });
      const { log } = console;
      log((result as any).errors);
      expect((result as any).errors).toBeUndefined();
    });
    it('should successfully process card payment for multiple receivers', async () => {
      const quantity = faker.datatype.number({ min: 1, max: 20 });
      const unitPrice = faker.datatype.number();
      const result = await client.transaction.create({
        amount: faker.datatype.number(),
        async: false,
        capture: true,
        customer: {
          country: 'br',
          email: faker.internet.email().toLowerCase(),
          name: `${faker.name.firstName()} ${faker.name.lastName()}`,
          phone_numbers: [fakePhoneNumber()],
          documents: [{ type: 'cpf', number: process.env.TEST_CPF }],
          type: 'individual',
          external_id: faker.datatype.uuid(),
        },
        billing: {
          name: faker.datatype.string(),
          address: {
            city: faker.datatype.string(),
            country: 'br',
            state: faker.datatype.string(),
            street: faker.datatype.string(),
            street_number: faker.datatype.string(),
            zipcode: fakeZipCode(),
            complementary: faker.datatype.string(),
            neighborhood: faker.datatype.string(),
          },
        },
        items: [{
          id: faker.random.word(),
          title: faker.random.word(),
          category: faker.random.word(),
          quantity,
          unit_price: unitPrice,
          venue: faker.random.word(),
          tangible: true,
          date: faker.date.past().toISOString().substr(0, 10),
        }],
        card_cvv: faker.datatype.number({ min: 1, max: 999 }).toFixed(0).padStart(3, '0'),
        card_expiration_date: faker.date.future(2).toISOString()
          .replace(/^\d\d(\d\d)[-](\d\d).+/, '$2$1'),
        card_holder_name: faker.random.word(),
        card_number: '4111111111111111',
        payment_method: 'credit_card',
        installments: faker.datatype.number({ min: 1, max: 5 }).toString(),
        reference_key: faker.random.word(),
        boleto_rules: undefined,
        local_time: new Date().toISOString(),
        session: faker.random.word(),
        shipping: {
          delivery_date: faker.date.soon().toISOString().substr(0, 10),
          name: faker.name.firstName(),
          fee: 0,
          expedited: false,
          address: {
            city: faker.datatype.string(),
            country: 'br',
            state: faker.datatype.string(),
            street: faker.datatype.string(),
            street_number: faker.datatype.string(),
            zipcode: fakeZipCode(),
            complementary: faker.datatype.string(),
            neighborhood: faker.datatype.string(),
          },
        },
        split_rules: [
          {
            recipient_id: process.env.SANDBOX_DEFAULT_RECEIVER_ID,
            percentage: 3,
          },
          {
            recipient_id: process.env.SANDBOX_SECONDARY_RECEIVER_ID,
            percentage: 97,
          },
        ],
      });
      const { log } = console;
      log((result as any).errors);
      expect((result as any).errors).toBeUndefined();
    });
  });
});
