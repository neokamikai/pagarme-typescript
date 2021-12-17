/**
 * Quando a autenticação é feita por um autenticador do tipo acquirer,
 * só é necessário enviar os campos mpi e redirect_url. Os campos mpi,
 * eci, cavv e transaction_id são os necessários para uma transação com autenticação externa.
 */
export default interface ICheckoutPaymentCheckoutDebitCardAuthentication {
  /**
   * Indica quem é o autenticador da transação.
   * Pode receber os valores "acquirer" para transações autenticadas
   * pela adquirente ou "third_party" para autenticadores externos.
   *
   * MaxLength: 11
   */
  mpi: string
  /**
   * Indica o resultado da tentativa de autenticação. Obrigatório quando o mpi é "third_party".
   *
   * MaxLength: 2
   */
  eci: string
  /**
   * Código de autenticação do dono do cartão. Obrigatório quando o mpi é "third_party".
   *
   * MaxLength: 256
   */
  cavv: string
  /**
   * id da transação no autenticador. Obrigatório quando o mpi é "third_party".
   *
   * MaxLength: 256
   */
  transaction_id: string
  /**
   * Identificador da transação no Directory Service
   *
   * MaxLength: 256
   */
  ds_transaction_id: string
  /**
   * Versão do 3D-S
   *
   * MaxLength: 6
   */
  version: string
  /**
   * Url de redirecionamento quando a transação é aprovada pelo autenticador.
   *
   * Obrigatório quando o mpi é "acquirer".
   *
   * MaxLength: 512
   */
  success_url: string
}
