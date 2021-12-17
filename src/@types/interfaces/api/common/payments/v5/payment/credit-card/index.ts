import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import ICreditCardPaymentCreditCard from './data';

export default interface ICreditCardPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodCreditCard
  /**
   * Objeto com dados do cartão de crédito
   */
  credit_card: ICreditCardPaymentCreditCard
  amount: number
}
