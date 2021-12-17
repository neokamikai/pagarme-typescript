import ICustomerObjectV5 from 'src/@types/interfaces/api/common/customer/v5';
import IPayments from 'src/@types/interfaces/api/common/payments/v5';
import IShipping from 'src/@types/interfaces/api/common/shipping/v5';
import IAntifraud from 'src/@types/interfaces/api/common/v5/anti-fraud';
import IDevice from 'src/@types/interfaces/api/common/v5/device';
import IGeoLocation from 'src/@types/interfaces/api/common/v5/geo-location';
import ISubMerchant from 'src/@types/interfaces/api/common/v5/sub-merchant';
import ICreateOrderPayloadItem from './item';

export default interface ICreateOrderPayload {
  /**
   * Código do cliente. Obrigatório, caso não seja informado o objeto customer
   */
  code?: string
  /**
   * Código do cliente. Obrigatório, caso não seja informado o objeto customer
   */
  customer_id?: string
  /**
   * Dados do cliente. Obrigatório caso o customer_id não seja informado.
   */
  customer: ICustomerObjectV5
  /**
   * Itens do pedido.
   */
  items: Array<ICreateOrderPayloadItem>
  /**
   * Dados para entrega.
   */
  shipping: IShipping
  /**
   * Dados de pagamento.
   */
  payments: IPayments
  /**
   * Informa se o pedido será criado aberto ou fechado.
   */
  closed?: boolean
  /**
   * Objeto chave/valor utilizado para armazenar informações adicionais sobre o pedido.
   */
  metadata?: { [id: string]: string }
  /**
   * Dados do dispositivo
   */
  device?: IDevice
  /**
   * Dados de geolocalização
   */
  location?: IGeoLocation
  /**
   * Endereço IP do dispositivo que solicitou a compra
   */
  ip?: string
  /**
   * Código da sessão do usuário
   */
  session_id?: string
  /**
   * Indica se o pedido passará ou não pelo antifraude.
   * Se não for enviado, será considerada a configuração da conta
   */
  antifraud_enabled?: boolean
  /**
   * Dados do serviço de antifraude.
   */
  antifraud?: IAntifraud
  /**
   * Dados de facilitadores de pagamento.
   */
  SubMerchant?: ISubMerchant

}
