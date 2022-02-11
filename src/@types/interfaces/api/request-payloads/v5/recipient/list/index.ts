export default interface IListRecipientsPayload {
  /**
   * Página atual.
   */
  page?: number
  /**
   * Quantidade de itens por página.
   */
  size?: number
  /**
   * Referencia externa única por recebedor.
   */
  code?: string
}
