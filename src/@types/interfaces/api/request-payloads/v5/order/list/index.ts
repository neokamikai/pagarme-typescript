import OrderStatusType from 'src/@types/enums/order-status';

export default interface IListOrdersPayload {
  /**
   * Código de referência do pedido no sistema da loja
   */
  code?: string
  /**
   * Status do pedido. Valores possíveis: pending, paid, canceled ou failed
   */
  status: OrderStatusType
  /**
   * Código do cliente.
   */
  customer_id?: string
  /**
   * Data de início do período de criação a ser listado.
   */
  created_since?: string
  /**
   * Data de final do período de criação a ser listado.
   */
  created_until?: string
  /**
   * Página atual
   */
  page?: number
  /**
   * Quantidade de itens.
   */
  size?: number
}
