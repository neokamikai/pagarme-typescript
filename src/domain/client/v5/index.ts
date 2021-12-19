import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';
import ICreateOrderPayload from 'src/@types/interfaces/api/request-payloads/v5/order/create';
import ClientOptions from 'src/@types/interfaces/client/options/v5';

interface IExecOptions {
  method: Method
  url: string
  query?: any
  body?: any
}
export default class ClientV5 {
  private axios: AxiosInstance;

  private options: ClientOptions;

  private lastAxiosResponse: AxiosResponse<any>;

  constructor(options: ClientOptions) {
    this.options = options;
    const baseUrl = `${process.env.PAGARME_BASE_URL}`.replace(/^(null|undefined|)$/, 'https://api.pagar.me');
    this.axios = axios.create({
      baseURL: `${baseUrl}/core/v5`, // ['https', ':', '//', 'api', '.pagarme.', 'com'].join(''),
      headers: {
        Authorization: `Basic ${Buffer.from(`${options.apiKey}:`).toString('base64')}`,
        'Content-Type': 'application/json',
      },
    });
  }

  public get clientOptions() { return this.options; }

  public get lastResponse() { return this.lastAxiosResponse; }

  private exec<T>(options: IExecOptions) {
    return this.axios.request<T>({
      method: options.method,
      url: options.url,
      params: options.query,
      data: options.body,
    }).then((response) => {
      this.lastAxiosResponse = response;
      return response.data;
    }).catch((error) => {
      if (error.response) {
        this.lastAxiosResponse = error.response;
        return error.response.data;
      }
      throw error;
    });
  }

  /**
   * createOrder
   */
  public createOrder(payload: ICreateOrderPayload) {
    return this.exec({
      method: 'POST',
      url: '/orders',
      body: payload,
    });
  }
}