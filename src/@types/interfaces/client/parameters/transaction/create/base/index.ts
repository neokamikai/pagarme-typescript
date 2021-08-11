import IBilling from 'src/@types/interfaces/api/common/billing';
import IProductInput from '../../../common/product';
import IShippingInput from '../../../common/shipping';
import ISplitRuleInput from '../../../common/split-rule';
import ICustomerCreateParameters from '../../../customer/create';

export default interface ITransactionBase<TMetadata extends Object = any> {
  /**
   * Valor a ser cobrado. Deve ser passado em centavos.
   *
   * Ex: R$ 10.00 = 1000. Deve ser no mínimo 1 real (100)
   */
  amount: number;
  /**
   * Endpoint do seu sistema que receberá informações a cada atualização da transação.
   *
   * Caso você defina este parâmetro, o processamento da transação se torna assíncrono.
   */
  postback_url?: string

  /**
   * Utilize false caso queira manter o processamento síncrono de uma transação.
   *
   * Ou seja, a resposta da transação é recebida na hora.
   */
  async?: boolean

  /**
   * Número de parcelas da transação, sendo
   * mínimo: 1 e Máximo: 12.
   *
   * OBS: Se o pagamento for boleto, o padrão é 1
   */
  installments?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | string

  /**
   * Após a autorização de uma transação, você pode escolher se
   * irá capturar ou adiar a captura do valor.
   *
   * Caso opte por postergar a captura, atribua o valor false
   */
  capture?: boolean

  /**
   * Descrição que aparecerá na fatura
   * depois do nome de sua empresa.
   *
   * Máximo de 13 caracteres, sendo alfanuméricos e espaços.
   */
  soft_descriptor?: string

  customer: ICustomerCreateParameters
  billing: IBilling

  /**
   * Define os dados de envio da compra, como nome do recebedor,
   * valor do envio e endereço de recebimento.
   *
   * Deve ser preenchido no caso da venda de bem físico (ver objeto items)
   */
  shipping: IShippingInput
  items: Array<IProductInput>

  metadata?: TMetadata
  /**
   * Regras de divisão da transação
   */
  split_rules?: Array<ISplitRuleInput>

  /**
     * Valor único que identifica a transação para permitir
     * uma nova tentativa de requisição com a segurança de que
     * a mesma operação não será executada duas vezes acidentalmente.
     */
  reference_key: string
  /**
     * Valor único que identifica a sessão do usuário acessando o site.
     *
     * Máximo de 100 caracteres
     */
  session: string

  /**
     * Data e hora do dispositivo que está efetuando a transação.
     *
     * Deve ser enviado no seguinte formato: yyyy-MM-dd'T'HH:mm:ss'Z.
     * Por exemplo: 2017-10-31T14:53:00.000Z.
     *
     * OBS.: este campo é necessário para transações de mundo
     * físico (com método de captura EMV e Magstripe)
     */
  local_time: string
  payment_method: 'credit_card' | 'boleto'

}
