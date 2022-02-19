import SubscriptionBillingType from 'src/@types/enums/subscriptions/billing-type';
import SubscriptionIntervalType from 'src/@types/enums/subscriptions/interval-type';
import ICreditCardPaymentCreditCardCard from 'src/@types/interfaces/api/common/payments/v5/payment/credit-card/data/card';
import IBaseSubscriptionRequest from '../base';
import ISubscriptionItem from '../common/item';

export default interface IStandaloneSubscriptionRequestPayload extends IBaseSubscriptionRequest {
  /**
   * Moeda. Valores possíveis: BRL
   */
  currency: string
  /**
   * Intervalo da recorrência.
   * Valores possíveis: day, week, month ou year.
   */
  interval: SubscriptionIntervalType
  /**
   * Valor mínimo em centavos da assinatura.
   */
  minimum_price: number
  /**
   * Número de intervalos de acordo com a propriedade interval entre cada cobrança da assinatura.
   * Ex.: plano mensal = interval_count (1) e interval (month)
   * plano trimestral = interval_count (3) e interval (month)
   * plano semestral = interval_count (6) e interval (month)
   */
  interval_count: number
  /**
   * Tipo de cobrança.
   * Valores possíveis: prepaid, postpaid ou exact_day.
   */
  billing_type: SubscriptionBillingType
  /**
   * Dia da cobrança.
   * Obrigatório, caso o billing_type seja exact_day
   */
  billing_day?: number
  /**
   * Quantidade de parcelas.
   * Será aplicada caso o método de pagamento da assinatura seja cartão de crédito .
   */
  installments?: number
  /**
   * Texto exibido na fatura do cartão.
   * Será aplicado caso o método de pagamento da assinatura seja cartão de crédito
   */
  statement_descriptor?: string
  /**
   * Itens do assinatura.
   */
  items: Array<ISubscriptionItem>
  /**
   * Cartão
   * - card_id é o código do cartão do cliente.
   * - card_token é token do cartão gerado pelo checkout transparente.
   * É obrigatório o envio de uma dessas identificações, caso
   * o payment_method seja credit_card ou debit_card.
   */
  card?: Array<ICreditCardPaymentCreditCardCard | { card_id: string } | { card_token: string }>

}
