import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import ICardGenerateKeyForHashResponse from 'src/@types/interfaces/api/responses/namespaces/card/generateKeyForHash';
import ITransactionCalculateInstallmentsResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/calculateInstallments';
import ITransactionCaptureResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/capture';
import ITransactionCollectPaymentResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/collectPayment';
import ITransactionCreateResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/create';
import ITransactionGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/getDetail';
import ITransactionGetEventsResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/getEvents';
import ITransactionGetListResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/getList';
import ITransactionGetOperationsResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/getOperations';
import ITransactionGetPayableResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/getPayable';
import ITransactionGetPayablesResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/getPayables';
import ITransactionRefundResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/refund';
import ITransactionUpdateResponse from 'src/@types/interfaces/api/responses/namespaces/transaction/update';
import ITransactionCalculateInstallmentsParameters from '../../parameters/transaction/calculateInstallments';
import ICaptureTransactionParameters from '../../parameters/transaction/capture';
import ITransactionCreateParameters, { ITransactionCreateAllFieldsParameters } from '../../parameters/transaction/create';
import ITransactionGetListParameters from '../../parameters/transaction/getList';
import ITransactionRefundParameters from '../../parameters/transaction/refund';
import IUpdateTransactionParameters from '../../parameters/transaction/update';

export default interface ITransactionNamespaceMethods {
  create: <TMetadata extends Object = any>(
    input: ITransactionCreateParameters<TMetadata>
    | ITransactionCreateAllFieldsParameters<TMetadata>
  ) => Promise<APIErrorResponse | ITransactionCreateResponse<TMetadata>>
  capture: <TMetadata extends Object = any>(
    transactionId: string, input: ICaptureTransactionParameters<TMetadata>
  ) => Promise<APIErrorResponse | ITransactionCaptureResponse>
  refund: <TMetadata extends Object = any>(
    transactionId: string,
    input: ITransactionRefundParameters<TMetadata>,
  ) => Promise<APIErrorResponse | ITransactionRefundResponse>
  getList: <TMetadata extends Object = any>(
    input: ITransactionGetListParameters<TMetadata>
  ) => Promise<APIErrorResponse | ITransactionGetListResponse>
  getDetail: <TMetadata extends Object = any>(
    transactionId: string) => Promise<APIErrorResponse | ITransactionGetDetailResponse<TMetadata>>
  getPayables: (
    transactionId: string) => Promise<APIErrorResponse | ITransactionGetPayablesResponse>
  getPayable: (
    transactionId: string, payableId: string
  ) => Promise<APIErrorResponse | ITransactionGetPayableResponse>
  getOperations: (
    transactionId: string,
  ) => Promise<APIErrorResponse | ITransactionGetOperationsResponse>
  getEvents: (
    transactionId: string, payableId: string,
  ) => Promise<APIErrorResponse | ITransactionGetEventsResponse>
  getCardHashKey: () => Promise<APIErrorResponse | ICardGenerateKeyForHashResponse>
  collectPayment: (
    transactionId: string,
  ) => Promise<APIErrorResponse | ITransactionCollectPaymentResponse>
  calculateInstallments: (
    params: ITransactionCalculateInstallmentsParameters,
  ) => Promise<APIErrorResponse | ITransactionCalculateInstallmentsResponse>
  update: (
    transactionId: string, input: IUpdateTransactionParameters,
  ) => Promise<APIErrorResponse | ITransactionUpdateResponse>
}
