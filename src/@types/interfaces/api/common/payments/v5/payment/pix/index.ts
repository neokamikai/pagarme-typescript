import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import IPixPaymentPix from './data';

export default interface IPixPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodPix
  pix: IPixPaymentPix
  amount: number
}
