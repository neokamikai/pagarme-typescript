import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IRecipientsCreateResponse from 'src/@types/interfaces/api/responses/namespaces/recipients/create';
import IRecipientsGetBalanceResponse from 'src/@types/interfaces/api/responses/namespaces/recipients/getBalance';
import IRecipientsGetBalanceOperationDetailResponse from 'src/@types/interfaces/api/responses/namespaces/recipients/getBalanceOperationDetail';
import IRecipientsGetBalanceOperationsResponse from 'src/@types/interfaces/api/responses/namespaces/recipients/getBalanceOperations';
import IRecipientsGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/recipients/getDetail';
import IRecipientsGetListResponse from 'src/@types/interfaces/api/responses/namespaces/recipients/getList';
import IRecipientsUpdateResponse from 'src/@types/interfaces/api/responses/namespaces/recipients/update';
import ICreateRecipientParameters from '../../parameters/recipients/create';
import IRecipientsGetBalanceOperationsParameters from '../../parameters/recipients/get-balance-operations';
import IRecipientGetListParameters from '../../parameters/recipients/getList';
import IUpdateRecipientParameters from '../../parameters/recipients/update';

export default interface IRecipientsNamespaceMethods {
  create: <TMetadata extends Object = any>(
    newRecipientData: ICreateRecipientParameters<TMetadata>,
  ) => Promise<APIErrorResponse | IRecipientsCreateResponse>
  update: <TMetadata extends Object = any>(
    recipientId: string,
    recipientAttributesToUpdate: IUpdateRecipientParameters<TMetadata>,
  ) => Promise<APIErrorResponse | IRecipientsUpdateResponse>
  getList: (
    params: IRecipientGetListParameters,
  ) => Promise<APIErrorResponse | IRecipientsGetListResponse>
  getDetail: (recipientId: string) => Promise<APIErrorResponse | IRecipientsGetDetailResponse>
  getBalance: (recipientId: string) => Promise<APIErrorResponse | IRecipientsGetBalanceResponse>
  getBalanceOperations: (
    recipientId: string, filters: IRecipientsGetBalanceOperationsParameters,
  ) => Promise<APIErrorResponse | IRecipientsGetBalanceOperationsResponse>
  getBalanceOperationDetail: (
    recipientId: string, operationId,
  ) => Promise<APIErrorResponse | IRecipientsGetBalanceOperationDetailResponse>
}
