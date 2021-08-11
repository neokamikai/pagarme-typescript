import { AxiosResponse } from 'axios';

export default interface HttpResponse<T = any, TError extends Error = Error>
  extends AxiosResponse<T> {
  error?: TError
}
