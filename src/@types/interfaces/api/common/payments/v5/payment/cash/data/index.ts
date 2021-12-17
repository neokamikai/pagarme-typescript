export default interface ICashPaymentCash {
  /**
   * Descrição do pagamento. Max: 256 caracteres.
   */
  description: string
  /**
 * Indica se o pagamento será confirmado no ato da criação
 * da cobrança ou se deve ser confirmado posteriormente.
 */
  confirm: boolean
  /**
   * Objeto chave/valor utilizado para armazenar informações adicionais sobre o pagamento.
   */
  metadata?: { [id: string]: string }
}
