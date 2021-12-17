import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import ICashPaymentCash from './data';

export default interface ICashPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodCash
  cash: ICashPaymentCash
}
