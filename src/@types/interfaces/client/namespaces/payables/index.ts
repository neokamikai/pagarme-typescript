import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IPayablesGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/payables/getDetail';
import IPayablesGetListResponse from 'src/@types/interfaces/api/responses/namespaces/payables/getList';
import IGetPayablesListParameters from '../../parameters/payables/list';

export default interface IPayablesNamespaceMethods {
  getList: (
    params: IGetPayablesListParameters,
  ) => Promise<APIErrorResponse | IPayablesGetListResponse>
  getDetail: (payableId: string) => Promise<APIErrorResponse | IPayablesGetDetailResponse>
}
