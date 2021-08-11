import ITransactionObject from 'src/@types/interfaces/api/common/transaction';

export default interface IUpdateTransactionParameters<TMetadata extends Object>
  extends ITransactionObject<TMetadata>{
}
