export default interface IBoletoInterestInput {
  /**
     * Dias após a expiração do boleto quando o juros deve ser cobrado.
     */
  days: number
  /**
     * Valor em centavos da taxa de juros que será cobrado por dia
     */
  amount: number
  /**
     * Valor em porcentagem da taxa de juros que será cobrado por dia.
     */
  percentage: number
}
