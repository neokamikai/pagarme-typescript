import { SubscriptionPaymentMethodType } from 'src/@types/enums/subscriptions/payment-method-type/v5';
import ICustomerObjectV5 from 'src/@types/interfaces/api/common/customer/v5';
import ISubscriptionDiscount from '../common/discount';
import ISubscriptionIncrement from '../common/increment';

export default interface IBaseSubscriptionRequest {
  /**
   * Código da assinatura no sistema da loja. Máx.: 52 caracteres
   */
  code: string
  /**
   * Meio de pagamento.
   * Valores possíveis: credit_card, boleto e debit_card .
   */
  payment_method: SubscriptionPaymentMethodType
  /**
   * Data de início da assinatura.
   * Se não for informada, a assinatura será iniciada imediatamente.
   */
  start_at?: string
  /**
   * Código do cliente.
   * Obrigatório caso o customer não seja informado.
   */
  customer_id?: string
  /**
   * Dados do cliente.
   * Obrigatório caso o customer_id não seja informado.
   */
  customer?: ICustomerObjectV5
  discounts?: Array<ISubscriptionDiscount>
  increments?: Array<ISubscriptionIncrement>
  boleto_due_days: number
  gateway_affiliation_id?: string
  metadata: { [id: string]: string }
}
