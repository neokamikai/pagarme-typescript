import ITransactionObject from 'src/@types/interfaces/api/common/transaction';

export default interface ITransactionRefundResponse extends ITransactionObject {
  status: 'refunded'
}
