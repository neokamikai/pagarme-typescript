import CardBrandType from 'src/@types/enums/card-brand';
import PaymentMethod from 'src/@types/enums/payment-method';
import RefuseReason from 'src/@types/enums/transaction/refuse/reason';
import TransactionStatus from 'src/@types/enums/transaction/status';
import StatusReason from 'src/@types/enums/transaction/status/reason';
import Billing from 'src/@types/interfaces/api/common/billing';
import Product from 'src/@types/interfaces/client/parameters/common/product';
import Shipping from 'src/@types/interfaces/client/parameters/common/shipping';
import SplitRule from 'src/@types/interfaces/client/parameters/common/split-rule';
import IAddress from '../address';
import ICardObject from '../card';
import ICustomerObject from '../customer';
import ICustomerDocumentObject from '../customer/document';

export default interface ITransactionObject<
  TMetadata extends Object = any, TAntifraudMetadata extends Object = any,
  > {
  /**
   * Nome do tipo do objeto criado/modificado.
   * Valor retornado: transaction
   */
  object: 'transaction'
  /**
   * Representa o estado da transação. A cada atualização no
   * processamento da transação, esta propriedade é alterada e,
   * caso você esteja usando uma postback_url, os seus servidores
   * são notificados desses updates.
   * Valores possíveis: processing, authorized, paid, refunded,
   * waiting_payment, pending_refund, refused .
   */
  status: TransactionStatus
  /**
   * Motivo pelo qual a transação foi recusada.
   * Valores possíveis: acquirer, antifraud, internal_error, no_acquirer, acquirer_timeout
   */
  refuse_reason: RefuseReason
  /**
   * Agente responsável pela validação ou anulação da transação.
   * Valores possíveis: acquirer, antifraud, internal_error, no_acquirer, acquirer_timeout
   */
  status_reason: StatusReason
  /**
   * Adquirente responsável pelo processamento da transação.
   * Valores possíveis: development (em ambiente de testes),
   * pagarme (adquirente Pagar.me), stone, cielo, rede.
   */
  acquirer_name: 'development' | 'pagarme' | 'stone' | 'cielo' | 'rede'
  /**
   * ID da adquirente responsável pelo processamento da transação.
   */
  acquirer_id: string
  /**
   * Mensagem de resposta da adquirente referente ao status da transação.
   */
  acquirer_response_code: string
  /**
   * Código de autorização retornado pela bandeira.
   */
  authorization_code: string
  /**
   * Texto que irá aparecer na fatura do cliente depois do nome da loja.
   * OBS: Limite de 13 caracteres.
   */
  soft_descriptor: string
  /**
   * Código que identifica a transação na adquirente.
   */
  tid: string
  /**
   * Código que identifica a transação na adquirente.
   */
  nsu: string
  /**
   * Data de criação da transação no formato ISODate
   */
  date_created: string
  /**
   * Data de atualização da transação no formato ISODate
   */
  date_updated: string
  /**
   * Valor, em centavos, da transação.
   *
   * @example R$ 100.00 = 10000
   */
  amount: number
  /**
   * Valor em centavos autorizado na transação, sempre menor ou igual a amount.
   */
  authorized_amount: number
  /**
   * Valor em centavos capturado na transação, sempre menor ou igual a authorized_amount.
   */
  paid_amount: number
  /**
   * Valor em centavos estornado até o momento na transação, sempre menor ou igual a paidamount
   */
  refunded_amount: number
  /**
   * Número de parcelas a serem cobradas.
   * OBS: Mínimo 1 e Máximo 12.
   */
  installments: number
  /**
   * Número identificador da transação
   */
  id: number
  /**
   * Custo da transação para o lojista, envolvendo processamento e antifraude.
   */
  cost: number
  /**
   * Nome do portador do cartão.
   */
  card_holder_name: string
  /**
   * Últimos 4 dígitos do cartão.
   */
  card_last_digits: string
  /**
   * Primeiros 5 dígitos do cartão
   */
  card_first_digits: string
  /**
   * Bandeira do cartão.
   */
  card_brand: CardBrandType
  /**
   * Usado em transações EMV, define se a validação do cartão
   * aconteceu online(com banco emissor), ou offline( através do chip).
   */
  card_pin_mode: string
  /**
   * URL (endpoint) de seu sistema que recebe notificações a cada mudança no status da transação.
   */
  postback_url: string
  /**
   * Método de pagamento, com os possíveis valores: credit_card e boleto.
   */
  payment_method: PaymentMethod
  /**
   * Define qual foi a forma de captura dos dados de pagamento.
   *
   * Valores possíveis: magstripe, emv, ecommerce.
   */
  capture_method: string
  /**
   * Define qual foi a nota de antifraude atribuída a transação.
   * Lembrando que por padrão, transações com score >= 95 são recusadas.
   */
  antifraud_score: string
  /**
   * URL do boleto para impressão
   */
  boleto_url: string
  /**
   * Código de barras do boleto gerado na transação
   */
  boleto_barcode: string
  /**
   * Data de expiração do boleto (em ISODate)
   */
  boleto_expiration_date: string
  /**
   * Mostra se a transação foi criada utilizando a API Key ou Encryption Key
   */
  referer: string
  /**
   * IP de origem que criou a transação, podendo ser diretamente de
   * seu cliente, caso a requisição venha diretamente do client-side,
   * ou de seus servidores, caso tudo esteja centralizando em sua
   * aplicação no server-side.
   */
  ip: string
  /**
   * Caso essa transação tenha sido originada na cobrança
   * de uma assinatura, o id desta será o valor dessa propriedade.
   */
  subscription_id: string
  phone: any
  address: IAddress
  /**
   * Dados do cliente. Obrigatório com o antifraude habilitado.
   */
  customer: ICustomerObject
  billing: Billing
  shipping: Shipping
  items: Array<Product>
  card: ICardObject
  split_rules: Array<SplitRule>
  antifraud_metadata: TAntifraudMetadata
  reference_key: string
  metadata: TMetadata

  documents: Array<ICustomerDocumentObject>
  session: string

}
