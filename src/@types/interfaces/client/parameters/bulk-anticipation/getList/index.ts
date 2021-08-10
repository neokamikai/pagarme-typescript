export default interface IBulkAnticipationsGetListParameters {
  /**
   * Retorna n resultados, com um máximo de 1000
   */
  count?: string
  /**
   * Útil para implementação de uma paginação de resultados
   */
  page?: string
  /**
   * Filtro de amount
   */
  amount?: string
  /**
   * Filtro de fee
   */
  fee?: string
  /**
   * Filtro de anticipation fee
   */
  anticipation_fee?: string
  /**
   * ID da antecipação procurada
   */
  id?: string
}
