import faker from 'faker';
import Client from 'src/domain/client';
import IBankAccountCreateResponse from 'src/@types/interfaces/api/responses/namespaces/bank-account/create';
import fakeCpf from 'tests/tools/fake-cpf';
import fakeBankAccount from 'tests/tools/fake-bank-account';
import fakeRecipientPhone from 'tests/tools/fake-recipient-phone';
import fakePhoneNumber from 'tests/tools/fake-phone-number';
import fakeZipCode from 'tests/tools/fake-zip-code';
import IRecipientObject from 'src/@types/interfaces/api/common/recipient';
import APIErrorResponse from 'src/@types/interfaces/api/responses/error';

describe('Client', () => {
  let client: Client;
  beforeAll(() => {
    client = new Client({
      apiKey: process.env.SANDBOX_API_KEY,
    });
  });
  describe('bankAccount', () => {
    let bankAccountId: string;
    describe('create()', () => {
      describe('when input is valid', () => {
        it('should return a bank_account object', async () => {
          const payload = fakeBankAccount();
          const response = await client.bankAccounts.create(payload);
          bankAccountId = `${(response as IBankAccountCreateResponse).id}`;
          expect(response).toHaveProperty('object', 'bank_account');
        });
      });
    });
    describe('getList()', () => {
      it('should return a list of bank_account objects', async () => {
        const response = await client.bankAccounts.getList({ });
        expect(response).toBeInstanceOf(Array);
      });
    });
    describe('getDetail()', () => {
      it('should return a bank_account object', async () => {
        const response = await client.bankAccounts.getDetail(bankAccountId);
        expect(response).toHaveProperty('object', 'bank_account');
      });
    });
  });
  describe('recipients', () => {
    let recipientId: string = process.env.TEST_EXISTING_RECIPIENT_ID;
    describe('create()', () => {
      it('should create a Person recipient', async () => {
        const bankAccount = fakeBankAccount();
        const response = await client.recipients.create({
          anticipatable_volume_percentage: faker.datatype.number(100).toString(),
          automatic_anticipation_enabled: true,
          metadata: {},
          external_id: faker.random.alphaNumeric(10),
          postback_url: null,
          transfer_day: faker.datatype.number({ min: 1, max: 31 }).toString(),
          transfer_enabled: true,
          transfer_interval: 'monthly',
          bank_account: bankAccount,
          register_information: {
            type: 'corporation',
            document_number: bankAccount.document_number,
            email: faker.internet.email(),
            company_name: faker.company.companyName(),
            phone_numbers: [fakeRecipientPhone()],
            site_url: faker.internet.url(),
            managing_partners: [{
              document_number: fakeCpf(),
              email: faker.internet.email(),
              name: [faker.name.firstName(), faker.name.lastName()].join(' '),
              type: 'individual',
            }],
          },
        });
        expect(response).toHaveProperty('object', 'recipient');
        recipientId = (response as IRecipientObject).id;
      });
    });
    describe('getList()', () => {
      it('should return a list of recipients', async () => {
        const response = await client.recipients.getList({});
        expect(response).toBeInstanceOf(Array);
      });
    });
    describe('getDetail()', () => {
      it('should return a recipient object', async () => {
        const response = await client.recipients.getDetail(recipientId);
        expect(response).toHaveProperty('object', 'recipient');
      });
    });
    describe('getBalance()', () => {
      it('should return balance information for recipientId', async () => {
        const response = await client.recipients.getBalance(recipientId);
        expect(response).toHaveProperty('object', 'balance');
        expect(response).toHaveProperty('waiting_funds');
        expect(response).toHaveProperty('available');
        expect(response).toHaveProperty('transferred');
      });
    });
    describe('getBalanceOperations()', () => {
      it('should return balance information for recipientId', async () => {
        const response = await client.recipients.getBalanceOperations(recipientId, {});
        expect(response).toBeInstanceOf(Array);
      });
    });
  });
  describe('customer', () => {
    const customerId = process.env.TEST_EXISTING_CUSTOMER_ID;
    describe('create()', () => {
      it('should create a customer', async () => {
        const response = await client.customer.create({
          country: 'br',
          documents: [{ number: fakeCpf(), type: 'cpf' }],
          email: faker.internet.email(),
          external_id: faker.random.alphaNumeric(10),
          name: [faker.name.firstName(), faker.name.lastName()].join(' '),
          phone_numbers: [`+5511${fakePhoneNumber()}`],
          type: 'individual',
        });
        expect(response).toHaveProperty('object', 'customer');
      });
    });
    describe('getList()', () => {
      it('should return a list of customers', async () => {
        const response = await client.customer.getList({});
        expect(response).toBeInstanceOf(Array);
      });
    });
    describe('getDetail()', () => {
      it('should return a customer object', async () => {
        const response = await client.customer.getDetail(customerId);
        expect(response).toHaveProperty('object', 'customer');
      });
    });
  });
  describe('payables', () => {
    describe('getList()', () => {
      it('should return a list of payables', async () => {
        const response = await client.payables.getList({});
        expect(response).toBeInstanceOf(Array);
      });
    });
  });
  describe('transaction', () => {
    describe('create()', () => {
      describe('when input is valid', () => {
        it('should successfully process card transaction', async () => {
          const result = await client.transaction.create({
            amount: faker.datatype.number(),
            async: false,
            capture: true,
            customer: {
              country: 'br',
              email: faker.internet.email().toLowerCase(),
              name: `${faker.name.firstName()} ${faker.name.lastName()}`,
              phone_numbers: [`+5511${fakePhoneNumber()}`],
              documents: [{ type: 'cpf', number: fakeCpf() }],
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
          expect(result).toHaveProperty('object', 'transaction');
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
              phone_numbers: [`+5511${fakePhoneNumber()}`],
              documents: [{ type: 'cpf', number: fakeCpf() }],
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
          expect(result).toHaveProperty('object', 'transaction');
        });
      });
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
          expect(result).toHaveProperty('errors');
          expect((result as APIErrorResponse).errors).toBeInstanceOf(Array);
        });
      });
    });
    describe('getList()', () => {
      it('should return a list of payables, without filters', async () => {
        const response = await client.payables.getList({});
        expect(response).toBeInstanceOf(Array);
      });
      it('should return a list of payables, with filters', async () => {
        const response = await client.payables.getList({ status: 'paid' });
        expect(response).toBeInstanceOf(Array);
      });
    });
  });
});
