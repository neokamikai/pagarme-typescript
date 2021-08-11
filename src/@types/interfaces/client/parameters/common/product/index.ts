export default interface IProductInput {
  /**
   * Obrigatório. Número de identificação na loja ou SKU (unidade de manutenção de estoque)
   */
  id: string
  /**
   * Obrigatório. Nome do item vendido.
   */
  title: string
  /**
   * Obrigatório. Preço por unidade do item vendido, passado em centavos. Ex: R$20,06 = 2006
   */
  unit_price: number
  /**
   * Obrigatório. Número de unidades vendidas do produto
   */
  quantity: number
  /**
   * Obrigatório. Caracteriza o produto como bem físico ou não.
   * Por bem físico, entende-se produtos que devem ser enviados
   * fisicamente ao comprador, como calçados, eletrônicos e brinquedos.
   *
   * Se for um bem físico deve conter true (sim).
   * Caso contrário, deve conter false (não)
   */
  tangible: boolean
  /**
   * Categoria do item
   */
  category: string
  /**
   * Local (se evento)
   */
  venue: string
  /**
   * Data (se evento). Estimativa fornecida no formato AAAA-MM-DD
   */
  date: string

}
