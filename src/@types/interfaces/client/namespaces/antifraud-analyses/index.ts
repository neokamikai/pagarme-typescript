import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import IAntifraudAnalysesGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/antifraud-analyses/getDetail';
import IAntifraudAnalysesGetListResponse from 'src/@types/interfaces/api/responses/namespaces/antifraud-analyses/getList';

export default interface IAntifraudAnalysesNamespaceMethods {
  /**
   * Retorna todas as análises antifraude realizadas em uma transação
   */
  getList: (
    transactionId: string,
  ) => Promise<APIErrorResponse | IAntifraudAnalysesGetListResponse>
  /**
   * Retorna uma análise antifraude específica realizada em uma transação.
   */
  getDetail: (
    transactionId: string, antifraudAnalisysId: string,
  ) => Promise<APIErrorResponse | IAntifraudAnalysesGetDetailResponse>
}
