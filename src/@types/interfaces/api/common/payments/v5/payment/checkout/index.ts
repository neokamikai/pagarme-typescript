import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import ICheckoutPaymentCheckout from './data';

export default interface ICheckoutPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodCheckout

  checkout: ICheckoutPaymentCheckout
}
