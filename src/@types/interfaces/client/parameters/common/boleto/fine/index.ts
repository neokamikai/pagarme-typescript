export default interface IBoletoFineInput {
  /**
     * Dias após a expiração do boleto quando a multa deve ser cobrada.
     */
  days: number
  /**
     * Valor em centavos da multa.
     */
  amount: number
  /**
     * Valor em porcentagem da multa.
     */
  percentage: number
}
