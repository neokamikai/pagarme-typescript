export default interface IPayablesGetListParameters {
  /** Filtro pela data de criação do payable */
// reated_at?: string

  /** Filtro pelo valor do recebível */
  amount?: string

  /** Filtro pelo ID do recebedor atrelado */
  recipient_id?: string

  /** Filtro pelo id da antecipação */
  bulk_anticipation_id?: string

  /** Filtro pelo status do recebível. paid ou waiting_funds */
  status?: string

  /** Filtro pelo installment do recebível - a qual parcela da transação o recebível se refere */
  installment?: string

  /** Filtro pelo ID da transação referida pelo recebível */
  transaction_id?: string

  /** Filtro pelo ID da regra de split atrelada */
  split_rule_id?: string

  /** Filtro pela data de pagamento do recebível */
  payment_date?: string

  /** Filtro pelo type do recebível. Pode ser chargeback, refund, chargeback_refund ou credit */
  type?: string

  /** Filtro pelo ID do recebível */
  id?: string

  /** Filtro pelo ID da liquidação do recebível */
  liquidation_arrangement_id?: string

  /** Retorna n resultados, com um máximo de 1000 */
  count?: number

  /** Parâmetro de paginação?: aplica um offset de page * count nos resultados */
  page?: number
}
