import CreditCardOperationType from 'src/@types/enums/payment-method/v5/credit-card/operation-type';
import ICard from './card';

export default interface ICreditCardPaymentCreditCard {
  /**
   * Indica se a transação deve ser capturada auth_and_capture,
   * autorizada auth_only, ou pré autorizada pre_auth
   */
  operation_type: CreditCardOperationType
  /**
   * Quantidade de parcelas
   */
  installments: number
  /**
   * Texto exibido na fatura do cartão. Max: 22 caracteres.
   */
  statement_descriptor: string

  /**
   * Cartão de crédito.
   */
  card: ICard
  card_id?: string
  card_token?: string
}
