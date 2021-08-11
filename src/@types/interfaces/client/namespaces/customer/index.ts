import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import ICustomerCreateResponse from 'src/@types/interfaces/api/responses/namespaces/customer/create';
import ICustomerGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/customer/getDetail';
import ICustomerGetListResponse from 'src/@types/interfaces/api/responses/namespaces/customer/getList';
import ICustomerUpdateResponse from 'src/@types/interfaces/api/responses/namespaces/customer/update';
import ICreateCustomerParameters from '../../parameters/customer/create';
import ICustomerGetListParameters from '../../parameters/customer/getList';
import IUpdateCustomerParameters from '../../parameters/customer/update';

export default interface ICustomerNamespaceMethods {
  create: (
    customer: ICreateCustomerParameters,
  ) => Promise<APIErrorResponse | ICustomerCreateResponse>
  update: (
    customerId: string, values: IUpdateCustomerParameters,
  ) => Promise<APIErrorResponse | ICustomerUpdateResponse>
  getList: (
    filters: ICustomerGetListParameters,
  ) => Promise<APIErrorResponse | ICustomerGetListResponse>
  getDetail: (
    customerId: string,
  ) => Promise<APIErrorResponse | ICustomerGetDetailResponse>
}
