export default interface ICustomerGetListParameters {
  /**
   * Filtro pelo nome do cliente
   */
  name?: string
  /**
   * Filtro pela data de criação
   */
  date_created?: string
  /**
   * Alias de date_created
   */
  created_at?: string
  /**
   * Filtro pelo ID dos customers
   */
  id?: string
  /**
   * Filtro pela data de nascimento do cliente
   */
  birthday?: string
}
