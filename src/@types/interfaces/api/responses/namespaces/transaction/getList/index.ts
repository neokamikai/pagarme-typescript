import ITransactionObject from '../../../../common/transaction';

export default interface ITransactionGetListResponse<TMetadata extends Object = any>
  extends Array<ITransactionObject<TMetadata>> {

}
