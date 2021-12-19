/* eslint-disable @typescript-eslint/indent */
import PaymentMethod from 'src/@types/enums/payment-method/v5';
import IPaymentCreditCard from './credit-card';
import IPaymentBoleto from './boleto';
import IPaymentPix from './pix';
import IPaymentCheckout from './checkout';
import IPaymentVoucher from './voucher';
import IPaymentBankTransfer from './bank-transfer';
import IPaymentCash from './cash';
import IPaymentSafetyPay from './safety-pay';

export interface IPaymentBase {
  payment_method: PaymentMethod
  amount: number
}

type IPayment = IPaymentCreditCard |
  IPaymentBoleto |
  IPaymentPix |
  IPaymentCheckout |
  IPaymentVoucher |
  IPaymentBankTransfer |
  IPaymentCash |
  IPaymentSafetyPay;

export default IPayment;
