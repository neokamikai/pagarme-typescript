export default interface IRefundSplitRuleInput {
  /**
   * Este é o id da split_rule de um dos recebedores da transação.
   */
  id: string
  /**
   * Em relação ao valor sendo estornado, define qual a porcentagem
   * que este recebedor é responsável. OBS: Obrigatório quando amount
   * não está presente
   */
  percentage: number
  /**
   * Em relação ao amount sendo estornado, especifica o respectivo
   * valor que será estornado deste recebedor. OBS: Obrigatório
   * quando percentage não estiver presente
   */
  amount: number
  /**
   * ID do recebedor a que parte do estorno é destinada.
   */
  recipient_id: string
  /**
   * Define qual o recebedor da transação será responsável pelas
   * taxas de processamento, após estorno.
   */
  charge_processing_fee: boolean
}
