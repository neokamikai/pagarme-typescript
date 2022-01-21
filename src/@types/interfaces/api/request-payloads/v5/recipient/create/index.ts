import PersonTypeV5 from 'src/@types/enums/person/type/v5';
import IAutomaticAnticipationSettingsV5Input from 'src/@types/interfaces/api/request-payloads/v5/common/settings/automatic-anticipation';
import ITransferSettingsV5Input from 'src/@types/interfaces/api/request-payloads/v5/common/settings/transfer';
import IBankAccountInputV5 from '../../common/bank-account';

export default interface ICreateRecipientPayloadV5 {
  /**
   * Nome do recebedor. Max:128 caracteres
   */
  name: string
  /**
 * E-mail do recebedor. Max: 64 caracteres
 */
  email?: string
  /**
   * Descrição do recebedor. Max:256 caracteres
   */
  description?: string
  /**
   * CPF ou CNPJ do recebedor. Max: 16 caracteres
   */
  document: string
  /**
   * Tipo de recebedor. Valores possíveis: individual (pessoa física) ou company (pessoa jurídica)
   */
  type: PersonTypeV5
  /**
   * Referencia externa única por recebedor
   */
  code?: string
  default_bank_account: IBankAccountInputV5
  transfer_settings: ITransferSettingsV5Input
  automatic_anticipation_settings: IAutomaticAnticipationSettingsV5Input
  metadata?: { [id: string]: string }
}
