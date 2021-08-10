import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IBulkAnticipationsCancelResponse from 'src/@types/interfaces/api/responses/namespaces/bulk-anticipations/cancel';
import IBulkAnticipationsConfirmResponse from 'src/@types/interfaces/api/responses/namespaces/bulk-anticipations/confirm';
import IBulkAnticipationsCreateResponse from 'src/@types/interfaces/api/responses/namespaces/bulk-anticipations/create';
import IBulkAnticipationsGetLimitsResponse from 'src/@types/interfaces/api/responses/namespaces/bulk-anticipations/getLimits';
import IBulkAnticipationsGetListResponse from 'src/@types/interfaces/api/responses/namespaces/bulk-anticipations/getList';
import IBulkAnticipationsCreateParameters from '../../parameters/bulk-anticipation/create';
import IBulkAnticipationsGetLimitsParameters from '../../parameters/bulk-anticipation/getLimits';
import IBulkAnticipationsGetListParameters from '../../parameters/bulk-anticipation/getList';

export default interface IBulkAnticipationsNamespaceMethods {
  /**
   * Cria uma antecipação
   */
  create: (
    recipientId: string, params: IBulkAnticipationsCreateParameters,
  ) => Promise<APIErrorResponse | IBulkAnticipationsCreateResponse>
  /**
   * Confirma a antecipação criada.
   * Seu status passará para pending, ou seja,
   * está criada com sucesso e aguardando aprovação do Pagar.me.
   */
  confirm: (
    recipientId: string, bulkAnticipationId: string,
  ) => Promise<APIErrorResponse | IBulkAnticipationsConfirmResponse>
  cancel: (
    recipientId: string, bulkAnticipationId: string,
  ) => Promise<APIErrorResponse | IBulkAnticipationsCancelResponse>
  /**
   * Enquanto você está construindo uma antecipação (status building),
   * você pode cancelar o processo deletando a criação daquela antecipação.
   * Lembrando que caso você não a destrua no status building, após 5
   * minutos ela é automaticamente destruída.
   *
   * This endpoint's documentation is currently experiencing difficulties
   * and will be back online shortly.
   */
  delete: (
    recipientId: string, bulkAnticipationId: string,
  ) => Promise<APIErrorResponse | ''>
  /**
   * Retorna os limites máximos e mínimos de antecipação que um recebedor pode fazer.
   */
  getLimits: (
    recipientId: string, params: IBulkAnticipationsGetLimitsParameters,
  ) => Promise<APIErrorResponse | IBulkAnticipationsGetLimitsResponse>
  /**
   * Retorna uma lista contendo objetos de antecipações.
   */
  getList: (
    recipientId: string, params: IBulkAnticipationsGetListParameters,
  ) => Promise<APIErrorResponse | IBulkAnticipationsGetListResponse>
}
