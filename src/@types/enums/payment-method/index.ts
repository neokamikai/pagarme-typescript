const PaymentMethodCreditCard = 'credit_card';
const PaymentMethodBoleto = 'boleto';

type PaymentMethod = typeof PaymentMethodCreditCard | typeof PaymentMethodBoleto;

export const PaymentMethodEnums = {
  PaymentMethodCreditCard: PaymentMethodCreditCard as typeof PaymentMethodCreditCard,
  PaymentMethodBoleto: PaymentMethodBoleto as typeof PaymentMethodBoleto,
};

export default PaymentMethod;
