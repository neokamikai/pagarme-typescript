import ErrorDetails from './details';

export default interface APIErrorResponse {
  errors: Array<ErrorDetails>
  method: string,
  url: string
}
