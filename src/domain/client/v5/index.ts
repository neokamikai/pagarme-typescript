import axios, { AxiosInstance, AxiosResponse, Method } from 'axios';
import ClientOptions from 'src/@types/interfaces/client/options/v5';
import {
  ICreateOrderPayload, ICreateReceiverPayload,
} from 'src/@types/interfaces/api/request-payloads/v5';
import Responses from 'src/@types/interfaces/api/responses';
import IUpdateReceiverPayload from 'src/@types/interfaces/api/request-payloads/v5/recipient/update';
import IUpdateReceiverBankAccountPayload from 'src/@types/interfaces/api/request-payloads/v5/recipient/update/bank-account';
import IUpdateReceiverTransferSettingsPayload from 'src/@types/interfaces/api/request-payloads/v5/recipient/transfer/settings';
import IListRecipientsPayload from 'src/@types/interfaces/api/request-payloads/v5/recipient/list';
import IListOrdersPayload from 'src/@types/interfaces/api/request-payloads/v5/order/list';
import IListResponse from 'src/@types/interfaces/api/responses/list';
import OrderV5 from 'src/@types/interfaces/api/responses/common/v5/order';
import IStandaloneSubscriptionRequestPayload from 'src/@types/interfaces/api/request-payloads/v5/subscriptions/standalone';

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
        Authorization: `Basic ${Buffer.from([`${options.apiKey}`.replace(/[:]$/, ''), ''].join(':')).toString('base64')}`,
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
  * listOrders
  */
  public listOrders(payload: IListOrdersPayload) {
    return this.exec<IListResponse<OrderV5>>({
      method: 'GET',
      url: '/orders',
      query: payload,
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

  /**
   * List Recipients
   */
  public listRecipients(params: IListRecipientsPayload = {}) {
    return this.exec<Responses.V5.Recipient.List>({
      method: 'GET',
      url: '/recipients',
      query: params,
    });
  }

  public getRecipient(recipientId: string) {
    return this.exec<Responses.V5.Recipient.Detail>({
      method: 'GET',
      url: `/recipients/${recipientId}`,
    });
  }

  public getRecipientBalance(recipientId: string) {
    return this.exec<Responses.V5.Recipient.Balance>({
      method: 'GET',
      url: `/recipients/${recipientId}/balance`,
    });
  }

  public createStandaloneSubscription(
    params: IStandaloneSubscriptionRequestPayload,
  ) {
    return this.exec<Responses.V5.Subscription.Standalone.Create>({
      method: 'POST',
      url: '/subscriptions',
      body: params,
    });
  }
}
