import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import ICompanyGetResponse from 'src/@types/interfaces/api/responses/namespaces/company/getSettings';

export default interface ICompanyNamespaceMethods {
  get: () => Promise<APIErrorResponse | ICompanyGetResponse>
}
