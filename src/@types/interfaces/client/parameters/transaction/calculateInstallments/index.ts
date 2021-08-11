export default interface ITransactionCalculateInstallmentsParameters {
  /**
   * Valor do produto/serviço vendido
   */
  amount: number
  /**
   * Número de parcelas isentas de juros
   */
  free_installments: string
  /**
   * Valor máximo de parcelas
   */
  max_installments: string
  /**
   * Valor da taxa de juros
   */
  interest_rate: string
}
