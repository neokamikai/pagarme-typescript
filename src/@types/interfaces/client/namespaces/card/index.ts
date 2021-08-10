import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import ICardCreateResponse from 'src/@types/interfaces/api/responses/namespaces/card/create';
import ICardGenerateKeyForHashResponse from 'src/@types/interfaces/api/responses/namespaces/card/generateKeyForHash';
import ICardGetDetailResponse from 'src/@types/interfaces/api/responses/namespaces/card/getDetail';
import ICardGetListResponse from 'src/@types/interfaces/api/responses/namespaces/card/getList';
import ICreateCardParameters from '../../parameters/card/create';
import IGetCardListParameters from '../../parameters/card/list';

export default interface ICardNamespaceMethods {
  create: (card: ICreateCardParameters) => Promise<APIErrorResponse | ICardCreateResponse>
  getList: (params: IGetCardListParameters) => Promise<APIErrorResponse | ICardGetListResponse>
  getDetail: (id: string) => Promise<APIErrorResponse | ICardGetDetailResponse>
  generateKeyForHash: () => Promise<APIErrorResponse | ICardGenerateKeyForHashResponse>
}
