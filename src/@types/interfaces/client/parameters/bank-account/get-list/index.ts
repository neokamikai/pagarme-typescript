export default interface IGetBankAccountListParameters {
  /**
   * Retorna n resultados, com um máximo de 1000
   */
  count?: string
  /**
   * Útil para implementação de uma paginação de resultados
   */
  page?: string
  /**
   * Filtro pelo ID da conta bancária
   */
  id?: string

  /**
   * Filtro pelo código do banco das contas bancárias
   */
  bank_code?: string
  /**
   * Filtro pela agencia da conta
   */
  agencia?: string
  /**
   * Filtro pelo dígito verificador da agencia da conta
   */
  agencia_dv?: string
  /**
   * Filtro pelo número da conta
   */
  conta?: string
  /**
   * Filtro pelo dígito verificador da conta
   */
  conta_dv?: string
  /**
   * Filtro pelo CPF/CNPJ atrelado à conta
   */
  document_number?: string
  /**
   * Filtro pelo nome do detentor da conta
   */
  legal_name?: string
  /**
   * Filtro pela data de criação da conta
   */
  date_created?: string
  /**
   * Alias de date_created
   */
  created_at?: string
}
