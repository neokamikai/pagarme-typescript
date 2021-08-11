import ICreateBankAccountParameters from '../../../bank-account/create';

export default interface PartialRefundTransactionParameters<TMetadata extends Object = any> {
  amount: string
  bank_account_id?: string
  bank_account?: ICreateBankAccountParameters
  metadata: TMetadata
}
