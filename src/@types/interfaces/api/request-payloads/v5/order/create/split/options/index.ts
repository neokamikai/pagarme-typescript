export default interface ISplitOptions {
  /**
   * Indica se o recebedor vinculado à regra será cobrado pelas taxas da transação
   */
  charge_processing_fee: boolean
  /**
   * Indica se o recebedor vinculado à regra irá receber o restante dos recebíveis após uma divisão
   */
  charge_remainder_fee: boolean
  /**
   * Indica se o recebedor é responsável pela transação em caso de chargeback.
   */
  liable: boolean
}
