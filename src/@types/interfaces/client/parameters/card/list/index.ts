export default interface IGetCardListParameters {
  /** Filtro pela data de criação */
  created_at?: string

  /** Filtro pela bandeira do cartão.
   * Pode ser: mastercard, visa, elo, amex, discover, aura, jcb, hipercard */
  brand?: string

  /** Filtro pelo nome do detentor do cartão */
  holder_name?: string

  /** Filtro pelos 6 primeiros dígitos do cartão */
  first_digits?: string

  /** Filtro pelos 4 últimos dígitos do cartão */
  last_digits?: string

  /** Filtro pelo id do customer atrelado ao cartão */
  customer_id?: string

  /** Filtro pela validade do cartão */
  valid?: boolean

  /** Filtro pelo país de origem do cartão no formato ISO 3166-1 alpha-2 */
  country?: string

  /** Filtro pela data de validade do cartão no formato MMYY */
  expiration_date?: string

  /** Filtro pela identificação de fingerprint do cartão */
  fingerprint?: string
}
