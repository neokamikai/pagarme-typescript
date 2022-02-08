import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';
import ClientOptions from 'src/@types/interfaces/client/options/v5';
import {
  ICreateOrderPayload, ICreateReceiverPayload,
} from 'src/@types/interfaces/api/request-payloads/v5';
import Responses from 'src/@types/interfaces/api/responses';
import IUpdateReceiverPayload from 'src/@types/interfaces/api/request-payloads/v5/recipient/update';
import IUpdateReceiverBankAccountPayload from 'src/@types/interfaces/api/request-payloads/v5/recipient/update/bank-account';

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

  /**
   * Creates recipient
   * @param payload Recipient data to be created
   * @returns Created recipient
   */
  public createRecipient(payload: ICreateReceiverPayload) {
    return this.exec<Responses.V5.Recipient.Create>({
      method: 'POST',
      url: '/recipients',
      body: payload,
    });
  }

  /**
   * Update Recipient
   */
  public updateRecipient(recipientId: string, payload: IUpdateReceiverPayload) {
    return this.exec<Responses.V5.Recipient.Create>({
      method: 'PUT',
      url: `/recipients/${recipientId}`,
      body: payload,
    });
  }

  /**
   * Update Recipient Transfer Settings
   */
  public updateRecipientTransferSettings(
    recipientId: string, payload: IUpdateReceiverTransferSettingsPayload,
  ) {
    return this.exec<Responses.V5.Recipient.TransferSettings>({
      method: 'PATCH',
      url: `/recipients/${recipientId}/transfer-settings`,
      body: payload,
    });
  }

  /**
   * Update Recipient Bank Account
   */
  public updateRecipientBankAccount(
    recipientId: string, payload: IUpdateReceiverBankAccountPayload,
  ) {
    return this.exec<Responses.V5.Recipient.Create>({
      method: 'PATCH',
      url: `/recipients/${recipientId}/default-bank-account`,
      body: payload,
    });
  }

  public getRecipientBalance(recipientId: string) {
    return this.exec<Responses.V5.Recipient.Balance>({
      method: 'GET',
      url: `/recipients/${recipientId}/balance`,
    });
  }
}
