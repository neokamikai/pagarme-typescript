import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';

export default interface ISafetyPayPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodSafetyPay
  amount: number
}
