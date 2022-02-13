import IPaging from './paging';

export default interface IListResponse<T> {
  data: Array<T>
  paging: IPaging
}
