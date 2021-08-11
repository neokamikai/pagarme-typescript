import ITransactionObject from '../../../../common/transaction';

export default interface ITransactionCreateResponse<TMetadata extends Object =any>
  extends ITransactionObject<TMetadata> {

}
