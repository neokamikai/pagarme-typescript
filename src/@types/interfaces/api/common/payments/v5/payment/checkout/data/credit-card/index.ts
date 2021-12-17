import ICreditCardPaymentCreditCard from '../../../credit-card/data';
import ICheckoutPaymentCheckoutCreditCardInstallment from './installment';

export default interface ICheckoutPaymentCheckoutCreditCard extends Omit<ICreditCardPaymentCreditCard, 'installments'> {
  /**
   * Indica se a transação deve ser capturada ou somente autorizada.
   *
   * Caso seja true, o valor é capturado simultaneamente à autorização.
   */
  capture: boolean
  /**
   * Texto da fatura do cartão.
   */
  statement_descriptor: string

  /**
   * Array de configurações de parcelas.
   */
  installments: Array<ICheckoutPaymentCheckoutCreditCardInstallment>
}
