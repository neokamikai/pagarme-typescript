export default interface IPixPaymentPix {
  /**
   * Data de expiração do Pix em segundos.
   * (Mandatório)
   */
  expires_in: number
  /**
   * Data de expiração do Pix.
   * (Opcional | Mandatório caso não enviado o expires_in) [Formato: YYYY-MM-DDThh:mm:ss]
   */
  expires_at?: Date | string
  /**
   * Objeto chave/valor utilizado para adicionar informações sobre o pagamento.
   * Esses dados serão visíveis para o consumidor na hora do pagamento.
   */
  additional_information: Array<{ [id: string]: string }>
}
