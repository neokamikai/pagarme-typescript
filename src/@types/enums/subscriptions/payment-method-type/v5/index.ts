import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';

export const SubscriptionPaymentMethodEnums = {
  boleto: PaymentMethodEnums.PaymentMethodBoleto as
    typeof PaymentMethodEnums.PaymentMethodBoleto,
  credit_card: PaymentMethodEnums.PaymentMethodCreditCard as
    typeof PaymentMethodEnums.PaymentMethodCreditCard,
  debit_card: PaymentMethodEnums.PaymentMethodDebitCard as
    typeof PaymentMethodEnums.PaymentMethodDebitCard,
};

export type SubscriptionPaymentMethodType =
  | typeof PaymentMethodEnums.PaymentMethodBoleto
  | typeof PaymentMethodEnums.PaymentMethodCreditCard
  | typeof PaymentMethodEnums.PaymentMethodDebitCard;
