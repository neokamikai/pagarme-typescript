import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IChargebacksGetListResponse from 'src/@types/interfaces/api/responses/namespaces/chargebacks/getList';
import IChargebacksGetListParameters from '../../parameters/chargebacks/getList';

export default interface IChargebacksNamespaceMethods {
  getList: (
    filters: IChargebacksGetListParameters,
  ) => Promise<APIErrorResponse | IChargebacksGetListResponse>
}
