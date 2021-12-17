import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import IVoucherPaymentVoucher from './data';

export default interface IVoucherPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodVoucher
  voucher: IVoucherPaymentVoucher
  amount: number
}
