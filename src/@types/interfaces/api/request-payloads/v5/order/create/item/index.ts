export default interface ICreateOrderPayloadItem {
  /**
   * Valor unitário.
   */
  amount: number
  /**
   * Descrição do item.
   */
  description: string
  /**
   * Quantidade de itens.
   */
  quantity: number
  /**
   * Código do item no sistema da loja.
   */
  code: string
}
