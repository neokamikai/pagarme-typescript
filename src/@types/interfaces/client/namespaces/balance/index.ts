import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IBalanceGetResponse from 'src/@types/interfaces/api/responses/namespaces/balance/get';
import IBalanceGetOperationDetailResponse from 'src/@types/interfaces/api/responses/namespaces/balance/getOperationDetail';
import IBalanceGetOperationsResponse from 'src/@types/interfaces/api/responses/namespaces/balance/getOperations';
import IBalanceGetOperationsParameters from '../../parameters/balance/get-operations';

export default interface IBalanceNamespaceMethods {
  get: () => Promise<APIErrorResponse | IBalanceGetResponse>
  getOperations: (
    filters: IBalanceGetOperationsParameters,
  ) => Promise<APIErrorResponse | IBalanceGetOperationsResponse>
  getOperationDetail: (
    balanceOperationId: string,
  ) => Promise<APIErrorResponse | IBalanceGetOperationDetailResponse>
}
