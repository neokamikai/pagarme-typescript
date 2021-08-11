import BoletoRule from 'src/@types/enums/boleto/rules';
import IBoletoFineInput from '../../../common/boleto/fine';
import IBoletoInterestInput from '../../../common/boleto/interest';

export default interface ITransactionBoletoParameters {
  /**
   * Default is 7 days from the transaction day
   * @format yyyy-MM-dd
   */
  boleto_expiration_date?: string
  boleto_fine?: IBoletoFineInput
  boleto_interest?: IBoletoInterestInput
  boleto_rules: Array<BoletoRule>

}
