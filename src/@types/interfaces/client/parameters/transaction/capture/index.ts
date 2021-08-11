import ISplitRuleInput from '../../common/split-rule';

export default interface ITransactionCaptureParameters<TMetadata extends Object = any> {
  /**
   * Valor a ser capturado. Deve ser passado em centavos. Ex: R$ 10.00 = 1000.
   */
  amount: number
  /**
   * Regras de divisão da transação
   */
  split_rules?: Array<ISplitRuleInput>
  /**
   * Metadata de informações adicionais, caso queira
   * incluir, i.e: Id do pedido, nome do produto, etc.
   */
  metadata?: TMetadata
}
