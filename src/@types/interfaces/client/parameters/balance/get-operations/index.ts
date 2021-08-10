export default interface IBalanceGetOperationsParameters {
  /**
   * Retorna n resultados, com um máximo de
   */
  count?: string
  /**
   * Útil para implementação de uma paginação de resultados
   */
  page?: string
  /**
   * Estado do saldo da conta. Valores possíveis: waiting_funds, available e transferred
  */
  status?: string
  /**
   * Filtro para data de criação
   */
  start_date?: string
  /**
   * Filtro para data de criação
   */
  end_date?: string
}
