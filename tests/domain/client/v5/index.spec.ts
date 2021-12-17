import ICreateOrderPayload from 'src/@types/interfaces/api/request-payloads/v5/order/create';
import ClientV5 from 'src/domain/client/v5';
import createOrderCreditCardMock from './mocks/requests/order/create/credit-card.json';

describe('ClientV5', () => {
  describe('get clientOptions()', () => {
    it('should return an object with same values as passed in constructor', () => {
      const input = {
        apiKey: process.env.PAGARME_API_KEY_TEST,
      };
      const instance = new ClientV5(input);
      expect(instance.clientOptions).toEqual(input);
    });
  });
  describe('get lastResponse()', () => {
    it('should return undefined if called when just instantiated', () => {
      const instance = new ClientV5({
        apiKey: process.env.PAGARME_API_KEY_TEST,
      });
      expect(instance.lastResponse).toBeUndefined();
    });
  });
  describe('createOrder()', () => {
    describe('when input is valid, should create an order successfully', () => {
      test('if payment_method is credit_card', async () => {
        const instance = new ClientV5({
          apiKey: process.env.PAGARME_API_KEY_TEST,
        });
        createOrderCreditCardMock.customer.document = process.env.TEST_CPF;
        const result = await instance.createOrder(createOrderCreditCardMock as ICreateOrderPayload);
        expect(result).toHaveProperty('status', 'paid');
      });
    });
  });
});
