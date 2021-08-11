import CardBrandType from 'src/@types/enums/card-brand';
import PaymentMethod from 'src/@types/enums/payment-method';
import TransactionStatus from 'src/@types/enums/transaction/status';
import IAddress from 'src/@types/interfaces/api/common/address';
import PhoneNumber from 'src/@types/interfaces/client/parameters/common/phone-number';
import ICustomerCreateParameters from '../../customer/create';

export default interface TransactionGetListParameters<TMetadata extends Object = any> {
  /**
   * Retorna n resultados, com um máximo de 1000
   */
  count?: number
  /**
   * Útil para implementação de uma paginação de resultados
   */
  page?: number
  /**
   * Filtro para um dos status?: processing, authorized, paid,
   * refunded, waiting_payment, pending_refund, refused
   */
  status?: TransactionStatus
  /**
   * Filtro para data de criação
   */
  date_created?: string
  /**
   * Filtro para data de último update
   */
  date_updated?: string
  /**
   * Filtro pelo valor da transação
   */
  amount?: number
  /**
   * Filtro de parcelas da transação
   */
  installments?: string
  /**
   * Filtro de id
   */
  id?: string
  /**
   * Filtro de tid
   */
  tid?: string
  /**
   * Filtro de nsu
   */
  nsu?: string
  /**
   * Filtro de nome do detentor do cartão
   */
  card_holder_name?: string
  /**
   * Filtro dos últimos 4 dígitos do cartão
   */
  card_last_digits?: string
  /**
   * Filtro da bandeira do cartão?: amex, aura, discover, elo, hipercard, jcb, visa, mastercard
   */
  card_brand?: CardBrandType
  /**
   * Filtro de postback_url
   */
  postback_url?: string
  /**
   * Filtro de método de pagamento?: credit_card, boleto
   */
  payment_method?: PaymentMethod
  /**
   * Filtro de método de captura
   */
  capture_method?: string
  /**
   * Filtro de boleto_url
   */
  boleto_url?: string
  /**
   * Filtro de score de antifraud
   */
  antifraud_score?: string
  /**
   * Filtro de subscription
   */
  subscription_id?: string
  /**
   * Filtro de todos os atributos do cliente
   */
  customer?: Partial<ICustomerCreateParameters>
  /**
   * Filtro de todos os atributos de endereço
   */
  address?: Partial<IAddress>
  /**
   * Filtro de todos os atributos do telefone
   */
  phone?: PhoneNumber
  /**
   * Filtro de reference_key
   */
  reference_key?: string
  /**
   * Filtro de order
   */
  order_id?: string
  /**
   * Filtro de todos os parâmetros de metadata. Depende do metadata.
   */
  metadata?: TMetadata
}
