import ICreditCardPaymentCreditCardCard from '../../../credit-card/data/card';
import ICheckoutPaymentCheckoutDebitCardAuthentication from './authentication';

export default interface ICheckoutPaymentCheckoutDebitCard {
  /**
   * Texto exibido na fatura do cartão. Max: 22 caracteres.
   */
  statement_descriptor: string
  card?: ICreditCardPaymentCreditCardCard
  card_id?: string
  card_token?: string
  /**
   * Indica se é uma cobrança/pedido de recorrência. Valor padrão: false
   */
  recurrence?: boolean
  /**
   * Objeto chave/valor utilizado para armazenar informações adicionais sobre o pagamento.
   */
  metadata: { [id: string]: string }
  /**
   * Código de classificação do ramo de atuação do lojista.
   */
  merchant_category_code: number
  /**
   * Objeto que indica se a transação de débito é autenticada ou não.
   */
  authentication: ICheckoutPaymentCheckoutDebitCardAuthentication
  /**
   * Objeto de dados criptografados, tais como: GooglePay
   */
  payload: any
}
