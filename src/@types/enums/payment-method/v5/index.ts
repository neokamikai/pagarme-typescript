const PaymentMethodDebitCard = 'debit_card';
const PaymentMethodCreditCard = 'credit_card';
const PaymentMethodBoleto = 'boleto';
const PaymentMethodVoucher = 'voucher';
const PaymentMethodBankTransfer = 'bank_transfer';
const PaymentMethodSafetyPay = 'safety_pay';
const PaymentMethodCheckout = 'checkout';
const PaymentMethodCash = 'cash';
const PaymentMethodPix = 'pix';

type PaymentMethod = typeof PaymentMethodCreditCard | typeof PaymentMethodBoleto |
  typeof PaymentMethodVoucher |
  typeof PaymentMethodBankTransfer |
  typeof PaymentMethodSafetyPay |
  typeof PaymentMethodCheckout |
  typeof PaymentMethodCash |
  typeof PaymentMethodDebitCard |
  typeof PaymentMethodPix;

export const PaymentMethodEnums = {
  PaymentMethodCreditCard: PaymentMethodCreditCard as typeof PaymentMethodCreditCard,
  PaymentMethodBoleto: PaymentMethodBoleto as typeof PaymentMethodBoleto,
  PaymentMethodVoucher: PaymentMethodVoucher as typeof PaymentMethodVoucher,
  PaymentMethodBankTransfer: PaymentMethodBankTransfer as typeof PaymentMethodBankTransfer,
  PaymentMethodSafetyPay: PaymentMethodSafetyPay as typeof PaymentMethodSafetyPay,
  PaymentMethodCheckout: PaymentMethodCheckout as typeof PaymentMethodCheckout,
  PaymentMethodCash: PaymentMethodCash as typeof PaymentMethodCash,
  PaymentMethodPix: PaymentMethodPix as typeof PaymentMethodPix,
  PaymentMethodDebitCard: PaymentMethodDebitCard as typeof PaymentMethodDebitCard,
};

export default PaymentMethod;
