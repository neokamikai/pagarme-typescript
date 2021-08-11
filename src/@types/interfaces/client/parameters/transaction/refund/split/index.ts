import RefundSplitRule from 'src/@types/interfaces/client/parameters/common/split-rule/refund';
import ICreateBankAccountParameters from '../../../bank-account/create';

export default interface SplitRefundTransactionParameters<TMetadata extends Object = any> {
  /**
   * Valor desejado para o estorno da transação.
   *
   * Deve ser passado em centavos. Ex: R$ 10.00 = 1000.
   */
  amount: number
  /**
   * Determina se a requisição deve ser síncrona (false), ou assíncrona,
   * em que a resposta final do estorno é enviada através de sua postback_url.
   */
  async: boolean
  /**
   * Define as regras de split para o estorno.
   */
  split_rules: Array<RefundSplitRule>
  /**
   * ID de uma conta bancária já cadastrada no Pagar.me
   */
  bank_account_id?: string
  /**
   * Objeto que contém os dados da conta bancária de quem deve receber o estorno.
   */
  bank_account?: ICreateBankAccountParameters
  /**
   * Você pode passar dados adicionais no estorno da transação
   * para facilitar uma futura análise de dados por seus sistemas.
   */
  metadata: TMetadata
}
