import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IBalanceGetResponse from 'src/@types/interfaces/api/responses/namespaces/balance/get';
import IBalanceGetOperationDetailResponse from 'src/@types/interfaces/api/responses/namespaces/balance/getOperationDetail';
import IBalanceGetOperationsResponse from 'src/@types/interfaces/api/responses/namespaces/balance/getOperations';

export default interface IBalanceNamespaceMethods {
  get: () => Promise<APIErrorResponse | IBalanceGetResponse>
  getOperations: () => Promise<APIErrorResponse | IBalanceGetOperationsResponse>
  getOperationDetail: () => Promise<APIErrorResponse | IBalanceGetOperationDetailResponse>
}
