import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import IBankTransferPaymentBankTransfer from './data';

export default interface IBankTransferPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodBankTransfer
  bank_transfer: IBankTransferPaymentBankTransfer
  amount: number
}
