import ITransactionObject from 'src/@types/interfaces/api/common/transaction';

export default interface ITransactionGetDetailResponse<TMetadata extends Object = any>
  extends ITransactionObject<TMetadata> {

}
