export default interface IRecipientGetListParameters {
  /**
   * Retorna n resultados, com um máximo de 1000
   */
  count?: string
  /**
   * Útil para implementação de uma paginação de resultados
   */
  page?: string
  /**
   * Filtro de bank account ID
   */
  bank_account_id?: string
  /**
   * Filtro de transfer enabled
   */
  transfer_enabled?: boolean
  /**
   * FIltro de transfer day
   */
  transfer_day?: string
  /**
   * Filtro de last transfer
   */
  last_transfer?: string
  /**
   * Completo ou parte do nome de um recebedor
   */
  name?: string
  /**
   * ID do recebedor procurado
   */
  id?: string
  /**
   * Identificador externo do recebedor
   */
  external_id?: string
}
