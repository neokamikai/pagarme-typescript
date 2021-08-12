import axios, { AxiosInstance, Method } from 'axios';
import APIErrorResponse from 'src/@types/interfaces/api/responses/error';
import HttpResponse from 'src/@types/interfaces/client/http-response';
import IAntifraudAnalysesNamespaceMethods from 'src/@types/interfaces/client/namespaces/antifraud-analyses';
import IBalanceNamespaceMethods from 'src/@types/interfaces/client/namespaces/balance';
import IBankAccountsNamespaceMethods from 'src/@types/interfaces/client/namespaces/bank-accounts';
import IBulkAnticipationsNamespaceMethods from 'src/@types/interfaces/client/namespaces/bulk-anticipations';
import ICardNamespaceMethods from 'src/@types/interfaces/client/namespaces/card';
import ICompanyNamespaceMethods from 'src/@types/interfaces/client/namespaces/company';
import ICustomerNamespaceMethods from 'src/@types/interfaces/client/namespaces/customer';
import IPayablesNamespaceMethods from 'src/@types/interfaces/client/namespaces/payables';
import IRecipientsNamespaceMethods from 'src/@types/interfaces/client/namespaces/recipients';
import ITransactionNamespaceMethods from 'src/@types/interfaces/client/namespaces/transaction';
import ClientOptions from 'src/@types/interfaces/client/options';
import ICaptureTransactionParameters from 'src/@types/interfaces/client/parameters/transaction/capture';
import QueryListTransactionsParameters from 'src/@types/interfaces/client/parameters/transaction/getList';
import RefundTransactionParameters from 'src/@types/interfaces/client/parameters/transaction/refund';
import PartialRefundTransactionParameters from 'src/@types/interfaces/client/parameters/transaction/refund/partial';
import SplitRefundTransactionParameters from 'src/@types/interfaces/client/parameters/transaction/refund/split';
import axiosErrorHandler from 'src/core/helpers/axios-error-handler';
import routes from './routes';

export type TransactionRefund<TMetadata> = RefundTransactionParameters<TMetadata> |
PartialRefundTransactionParameters<TMetadata> | SplitRefundTransactionParameters<TMetadata>;

export default class Client {
  private axios: AxiosInstance;

  private options: ClientOptions;

  public transaction: ITransactionNamespaceMethods;

  public card: ICardNamespaceMethods;

  public balance: IBalanceNamespaceMethods;

  public payables: IPayablesNamespaceMethods;

  public bulkAnticipations: IBulkAnticipationsNamespaceMethods;

  public bankAccounts: IBankAccountsNamespaceMethods;

  public recipients: IRecipientsNamespaceMethods;

  public customer: ICustomerNamespaceMethods;

  public antifraudAnalyses: IAntifraudAnalysesNamespaceMethods;

  public company: ICompanyNamespaceMethods;

  constructor(options: ClientOptions) {
    this.axios = axios.create({
      auth: {
        username: options.apiKey,
        password: 'x',
      },
      baseURL: 'https://api.pagar.me', // ['https', ':', '//', 'api', '.pagarme.', 'com'].join(''),
      headers: {
        'X-PagarMe-Version': ({ apiVersion: '2019-09-01', ...options }).apiVersion,
      },
    });
    this.options = options;
    this.transaction = Object.freeze({
      create: this.createTransaction.bind(this),
      capture: this.captureTransaction.bind(this),
      getList: this.queryTransactionList.bind(this),
      getDetail: this.queryTransactionByTransactionId.bind(this),
      getPayables: this.queryTransactionPayables.bind(this),
      getPayable: this.queryTransactionPayableByTransactionIdAndPayableId.bind(this),
      getOperations: this.queryTransactionOperations.bind(this),
      getEvents: this.queryTransactionEvents.bind(this),
      getCardHashKey: this.queryCardHashKey.bind(this),
      collectPayment: this.collectPayment.bind(this),
      calculateInstallments: this.calculateInstallments.bind(this),
      update: this.updateTransaction.bind(this),
      refund: this.transactionRefund.bind(this),
    });
    this.antifraudAnalyses = Object.freeze({
      getList: this.queryAntifraudAnalysesList.bind(this),
      getDetail: this.queryAntifraudAnalysesDetail.bind(this),
    });
    this.balance = Object.freeze({
      get: this.queryBalance.bind(this),
      getOperations: this.queryBalanceOperations.bind(this),
      getOperationDetail: this.queryBalanceOperationDetail.bind(this),
    });
    this.card = Object.freeze({
      create: this.cardCreate.bind(this),
      getList: this.queryCardList.bind(this),
      getDetail: this.queryCardDetail.bind(this),
      generateKeyForHash: this.generateKeyForHash.bind(this),
    });
    this.payables = Object.freeze({
      /* getList, getDetail */
      getList: this.queryPayablesList.bind(this),
      getDetail: this.queryPayablesDetail.bind(this),
    });
    this.bulkAnticipations = Object.freeze({
      /* create, confirm, cancel, delete, getLimits, getList */
      create: this.bulkAnticipationsCreate.bind(this),
      confirm: this.bulkAnticipationsConfirm.bind(this),
      cancel: this.bulkAnticipationsCancel.bind(this),
      delete: this.bulkAnticipationsDelete.bind(this),
      getLimits: this.queryBulkAnticipationsLimits.bind(this),
      getList: this.queryBulkAnticipationsList.bind(this),
    });
    this.bankAccounts = Object.freeze({
      /* create, getList, getDetail */
      create: this.bankAccountsCreate.bind(this),
      getList: this.bankAccountsGetList.bind(this),
      getDetail: this.bankAccountsGetDetail.bind(this),
    });
    this.recipients = Object.freeze({
      /* create, update, getList, getDetail, */
      create: this.recipientsCreate.bind(this),
      update: this.recipientsUpdate.bind(this),
      getList: this.queryRecipientsList.bind(this),
      getDetail: this.queryRecipientsDetail.bind(this),
      getBalance: this.queryRecipientsBalance.bind(this),
      getBalanceOperations: this.queryRecipientsBalanceOperations.bind(this),
      getBalanceOperationDetail: this.queryRecipientsBalanceOperationDetail.bind(this),
    });
    this.customer = Object.freeze({
      /* create, update, getList, getDetail */
      create: this.customerCreate.bind(this),
      update: this.customerUpdate.bind(this),
      getList: this.customerGetList.bind(this),
      getDetail: this.customerGetDetail.bind(this),
    });
    this.company = Object.freeze({
      /* get */
      get: this.queryCompany.bind(this),
    });
  }

  private generateKeyForHash() {
    this.execByRouteId(routes.routeIds.transaction.generateKeyForHash, [], {});
  }

  private queryRefundList(params) {
    return this.execByRouteId(routes.routeIds.refund.getList, [], params);
  }

  private refundCancel(...args) {
    return this.execByRouteId(routes.routeIds.refund.cancel, args, {});
  }

  private cardCreate(params: any) {
    return this.execByRouteId(routes.routeIds.card.create, [], params);
  }

  private queryCardList(params) {
    return this.execByRouteId(routes.routeIds.card.getList, [], params, {});
  }

  private queryCardDetail(...args) {
    return this.execByRouteId(routes.routeIds.card.getDetail, args, {});
  }

  private planCreate(...args) {
    return this.execByRouteId(routes.routeIds.plans.create, args, {});
  }

  private planUpdate(...args) {
    return this.execByRouteId(routes.routeIds.plans.update, args, {});
  }

  private queryPlansGetList(...args) {
    return this.execByRouteId(routes.routeIds.plans.getList, args, {});
  }

  private queryPlanDetail(...args) {
    return this.execByRouteId(routes.routeIds.plans.getDetail, args, {});
  }

  private subscriptionsCreate(...args) {
    return this.execByRouteId(routes.routeIds.subscriptions.create, args, {});
  }

  private subscriptionsCancel(...args) {
    return this.execByRouteId(routes.routeIds.subscriptions.cancel, args, {});
  }

  private subscriptionsUpdate(...args) {
    return this.execByRouteId(routes.routeIds.subscriptions.update, args, {});
  }

  private querySubscriptionsList(...args) {
    return this.execByRouteId(routes.routeIds.subscriptions.getList, args, {});
  }

  private querySubscriptionsDetail(...args) {
    return this.execByRouteId(routes.routeIds.subscriptions.getDetail, args, {});
  }

  private querySubscriptionsTransactions(...args) {
    return this.execByRouteId(routes.routeIds.subscriptions.getTransactions, args, {});
  }

  private subscriptionsSkipCharge(...args) {
    return this.execByRouteId(routes.routeIds.subscriptions.skipCharge, args, {});
  }

  private postbackRedeliver(...args) {
    return this.execByRouteId(routes.routeIds.postback.redeliver, args, {});
  }

  private queryPostbackList(...args) {
    return this.execByRouteId(routes.routeIds.postback.getList, args, {});
  }

  private queryPostbackDetail(...args) {
    return this.execByRouteId(routes.routeIds.postback.getDetail, args, {});
  }

  private queryPayablesList(filters: any) {
    return this.execByRouteId(routes.routeIds.payables.getList, [], filters);
  }

  private queryPayablesDetail(...args) {
    return this.execByRouteId(routes.routeIds.payables.getDetail, args, {});
  }

  private transfersCreate(...args) {
    return this.execByRouteId(routes.routeIds.transfers.create, args, {});
  }

  private transfersCancel(...args) {
    return this.execByRouteId(routes.routeIds.transfers.cancel, args, {});
  }

  private queryTransfersList(...args) {
    return this.execByRouteId(routes.routeIds.transfers.getList, args, {});
  }

  private queryTransfersDetail(...args) {
    return this.execByRouteId(routes.routeIds.transfers.getDetail, args, {});
  }

  private bulkAnticipationsCreate(recipientId: string, params: any) {
    return this.execByRouteId(routes.routeIds.bulkAnticipations.create, [recipientId], params);
  }

  private bulkAnticipationsConfirm(...args) {
    return this.execByRouteId(routes.routeIds.bulkAnticipations.confirm, args, {});
  }

  private bulkAnticipationsCancel(...args) {
    return this.execByRouteId(routes.routeIds.bulkAnticipations.cancel, args, {});
  }

  private bulkAnticipationsDelete(...args) {
    return this.execByRouteId(routes.routeIds.bulkAnticipations.delete, args, {});
  }

  private queryBulkAnticipationsLimits(recipientId: string, params:any) {
    return this.execByRouteId(routes.routeIds.bulkAnticipations.getLimits, [recipientId], params);
  }

  private queryBulkAnticipationsList(recipientId: string, filters:any) {
    return this.execByRouteId(routes.routeIds.bulkAnticipations.getList, [recipientId], filters);
  }

  private bankAccountsCreate(payload: any) {
    return this.execByRouteId(routes.routeIds.bankAccounts.create, [], payload);
  }

  private bankAccountsGetList(filters: any) {
    return this.execByRouteId(routes.routeIds.bankAccounts.getList, [], filters);
  }

  private bankAccountsGetDetail(...args) {
    return this.execByRouteId(routes.routeIds.bankAccounts.getDetail, args, {});
  }

  private recipientsCreate(params: any) {
    return this.execByRouteId(routes.routeIds.recipients.create, [], params);
  }

  private recipientsUpdate(id: string, params: any) {
    return this.execByRouteId(routes.routeIds.recipients.update, [id], params);
  }

  private queryRecipientsList(filters: any) {
    return this.execByRouteId(routes.routeIds.recipients.getList, [], filters);
  }

  private queryRecipientsDetail(...args) {
    return this.execByRouteId(routes.routeIds.recipients.getDetail, args, {});
  }

  private queryRecipientsBalance(...args) {
    return this.execByRouteId(routes.routeIds.recipients.getBalance, args, {});
  }

  private queryRecipientsBalanceOperations(recipientId: string, params: any) {
    return this.execByRouteId(
      routes.routeIds.recipients.getBalanceOperations, [recipientId], params,
    );
  }

  private queryRecipientsBalanceOperationDetail(...args) {
    return this.execByRouteId(routes.routeIds.recipients.getBalanceOperationDetail, args, {});
  }

  private customerCreate(params: any) {
    return this.execByRouteId(routes.routeIds.customer.create, [], params);
  }

  private customerUpdate(customerId: string, params: any) {
    return this.execByRouteId(routes.routeIds.customer.update, [customerId], params);
  }

  private customerGetList(filters: any) {
    return this.execByRouteId(routes.routeIds.customer.getList, [], filters);
  }

  private customerGetDetail(...args) {
    return this.execByRouteId(routes.routeIds.customer.getDetail, args, {});
  }

  private zipCodeGetDetail(...args) {
    return this.execByRouteId(routes.routeIds.zipcode.getDetail, args, {});
  }

  private querySplitRulesList(...args) {
    return this.execByRouteId(routes.routeIds.splitRules.getList, args, {});
  }

  private querySplitRulesDetail(...args) {
    return this.execByRouteId(routes.routeIds.splitRules.getDetail, args, {});
  }

  private queryChargeBacksList(...args) {
    return this.execByRouteId(routes.routeIds.chargebacks.getList, args, {});
  }

  private paymentLinksCreate(...args) {
    return this.execByRouteId(routes.routeIds.paymentLinks.create, args, {});
  }

  private paymentLinksCancel(...args) {
    return this.execByRouteId(routes.routeIds.paymentLinks.cancel, args, {});
  }

  private queryPaymentLinksList(...args) {
    return this.execByRouteId(routes.routeIds.paymentLinks.getList, args, {});
  }

  private queryPaymentLinksDetail(...args) {
    return this.execByRouteId(routes.routeIds.paymentLinks.getDetail, args, {});
  }

  private paymentLinksOrder(...args) {
    return this.execByRouteId(routes.routeIds.paymentLinks.order, args, {});
  }

  private securityRulesCreate(...args) {
    return this.execByRouteId(routes.routeIds.securityRules.create, args, {});
  }

  private securityRulesDelete(...args) {
    return this.execByRouteId(routes.routeIds.securityRules.delete, args, {});
  }

  private querySecurityRulesList(...args) {
    return this.execByRouteId(routes.routeIds.securityRules.getList, args, {});
  }

  private queryCompany(...args) {
    return this.execByRouteId(routes.routeIds.company.get, args, {});
  }

  private queryBalance(...args) {
    return this.execByRouteId(routes.routeIds.balance.get, args, {});
  }

  private queryBalanceOperations(...args) {
    return this.execByRouteId(routes.routeIds.balance.getOperations, args, {});
  }

  private queryBalanceOperationDetail(...args) {
    return this.execByRouteId(routes.routeIds.balance.getOperationDetail, args, {});
  }

  private queryAntifraudAnalysesList(...args) {
    return this.execByRouteId(routes.routeIds.antifraudAnalyses.getList, args, {});
  }

  private queryAntifraudAnalysesDetail(...args) {
    return this.execByRouteId(routes.routeIds.antifraudAnalyses.getDetail, args, {});
  }

  private queryTransactionEvents(...args) {
    return this.execByRouteId(routes.routeIds.transaction.getEvents, args, {});
  }

  private queryCardHashKey(...args) {
    return this.execByRouteId(routes.routeIds.transaction.getCardHashKey, args, {});
  }

  private collectPayment(...args) {
    return this.execByRouteId(routes.routeIds.transaction.collectPayment, args, {});
  }

  private calculateInstallments(...args) {
    return this.execByRouteId(routes.routeIds.transaction.calculateInstallments, args, {});
  }

  private updateTransaction(...args) {
    return this.execByRouteId(routes.routeIds.transaction.update, args, {});
  }

  private execByRouteId(routeId: string, args: Array<any>, data: any, headers?: any, params?: any) {
    const { method, url } = routes.resolve(routeId, args);

    return this.exec(method, url, data, { ...headers }, { ...params });
  }

  private async exec(
    method: Method, func: string, data: any, headers: any, params?: any,
  ): Promise<HttpResponse> {
    const result: any = await this.axios.request({
      method,
      data,
      params,
      url: func,
      headers,
      auth: {
        username: this.options.apiKey,
        password: 'x',
      },
    }).then((response) => response)
      .catch(axiosErrorHandler);
    return result?.data || result;
  }

  private createTransaction(
    input: any,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.create, [], input, {
      'X-PagarMe-User-Agent': 'Checkout/2.0.0',
    });
  }

  private captureTransaction<TMetadata extends Object = any>(
    transactionId: string, input: ICaptureTransactionParameters<TMetadata>,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.capture, [transactionId], input);
  }

  private transactionRefund<TMetadata extends Object = any>(
    transactionId: string, input: RefundTransactionParameters<TMetadata>,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.refund, [transactionId], input);
  }

  private queryTransactionList<TMetadata extends Object = any>(
    input: QueryListTransactionsParameters<TMetadata>,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.getList, [], input, {});
  }

  private queryTransactionByTransactionId(
    transactionId: string,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.getDetail, [transactionId], {});
  }

  private queryTransactionPayables(
    transactionId: string,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.getPayables, [transactionId], {})
      .then((response) => response.data as (any | APIErrorResponse));
  }

  private queryTransactionPayableByTransactionIdAndPayableId(
    transactionId: string, payableId: string,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.getPayable,
      [transactionId, payableId], {})
      .then((response) => response.data as (any | APIErrorResponse));
  }

  private queryTransactionOperations(
    transactionId: string,
  ) {
    return this.execByRouteId(routes.routeIds.transaction.getOperations,
      [transactionId], {});
  }
}
