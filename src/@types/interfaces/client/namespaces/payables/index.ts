import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IPayablesGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/payables/getDetail';
import IPayablesGetListResponse from 'src/@types/interfaces/api/responses/namespaces/payables/getList';
import IPayablesGetListParameters from '../../parameters/payables/getList';

export default interface IPayablesNamespaceMethods {
  getList: (
    params: IPayablesGetListParameters,
  ) => Promise<APIErrorResponse | IPayablesGetListResponse>
  getDetail: (payableId: string) => Promise<APIErrorResponse | IPayablesGetDetailResponse>
}
