import AutomaticAnticipationType from 'src/@types/enums/automatic-anticipation-type';
import ICreateBankAccountParameters from '../../bank-account/create';
import IRegisterInformationCorporation from '../register-information/corporation';
import IRegisterInformationIndividual from '../register-information/individual';

export default interface ICreateRecipientParameters<TMetadata extends any = any> {
  /**
   * Identificador externo do recebedor
   */
  external_id?: string
  /**
   * Frequência na qual o recebedor irá ser pago. Valores possíveis: daily, weekly, monthly
   */
  transfer_interval: 'daily' | 'weekly' | 'monthly'
  /**
   * Dia no qual o recebedor vai ser pago. Depende do transfer_interval.
   *
   * Se for daily, não é necessário.
   *
   * Se for weekly pode ser de 1 (segunda) a 5 (sexta). Se for monthly, pode ser de 1 a 31.
   */
  transfer_day: string
  /**
   * Variável que indica se o recebedor pode receber os pagamentos automaticamente
   */
  transfer_enabled: boolean
  /**
   * URL (endpoint) de seu sistema que recebe notificações a cada mudança no status do recebedor.
   */
  postback_url: string
  /**
   * Identificador de uma conta bancária previamente criada.
   *
   * Você também pode passar todos parâmetros necessários para criação de uma conta bancária.
   */
  bank_account_id?: string

  /**
   * Dados para criação de uma nova conta bancária no sistema da Pagar.me
   */
  bank_account?: ICreateBankAccountParameters

  /**
   * Porcentagem do valor passível de antecipação para este recebedor.
   */
  anticipatable_volume_percentage: string

  /**
   * Se o recebedor está habilitado para receber automaticamente
   * ou não o valor disponível para antecipação.
   */
  automatic_anticipation_enabled: string

  /**
   * Configuração de como devemos criar as antecipações automáticas do recebedor.
   * Valor full para criarmos antecipações seguindo a regra de volume máximo antecipável.
   * Valor 1025, para criarmos antecipações de vendas inteiras, modelos D+X e 10/25.
   */
  automatic_anticipation_type: AutomaticAnticipationType

  /**
   * Lista de dias em que devemos criar as antecipações automáticas.
   */
  automatic_anticipation_days: string

  /**
   * Parâmetro de quantos dias, contados do dia da antecipação para trás,
   * devemos desconsiderar na criação desta antecipação.
   */
  automatic_anticipation_1025_delay: string

  /**
   * Campo usado para receber informações cadastrais de um recebedor.
   * Este recebedor pode ser pessoal física ou pessoa jurídica,
   * onde cada um tem formato especifico.
   */
  register_information: IRegisterInformationIndividual | IRegisterInformationCorporation

  /**
   * Objeto com dados adicionais do recebedor.
   */
  metadata: TMetadata
}
