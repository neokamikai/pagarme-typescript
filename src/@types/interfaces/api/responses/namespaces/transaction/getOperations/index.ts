import ITransactionOperation from '../../../../common/transaction/operation';

export default interface ITransactionGetOperationsResponse
  extends Array<ITransactionOperation<any>> {

}
