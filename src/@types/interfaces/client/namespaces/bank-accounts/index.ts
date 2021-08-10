import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IBankAccountCreateResponse from 'src/@types/interfaces/api/responses/namespaces/bank-account/create';
import IBankAccountGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/bank-account/getDetail';
import IBankAccountGetListResponse from 'src/@types/interfaces/api/responses/namespaces/bank-account/getList';
import ICreateBankAccountParameters from '../../parameters/bank-account/create';
import IGetBankAccountListParameters from '../../parameters/bank-account/get-list';

export default interface IBankAccountsNamespaceMethods {
  create: (
    payload: ICreateBankAccountParameters,
  ) => Promise<APIErrorResponse | IBankAccountCreateResponse>
  getList: (
    filters: IGetBankAccountListParameters,
  ) => Promise<APIErrorResponse | IBankAccountGetListResponse>
  getDetail: (
    bankAccountId: string,
  ) => Promise<APIErrorResponse | IBankAccountGetDetailResponse>
}
