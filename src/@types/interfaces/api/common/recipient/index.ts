import AutomaticAnticipationType from 'src/@types/enums/automatic-anticipation-type';
import TransferInterval from 'src/@types/enums/transfer-interval';
import IRegisterInformationCorporation from 'src/@types/interfaces/client/parameters/recipients/register-information/corporation';
import IRegisterInformationIndividual from 'src/@types/interfaces/client/parameters/recipients/register-information/individual';
import IBankAccountObject from '../bank-account';

export default interface IRecipientObject {
  object: 'recipient'
  id: string
  transfer_enabled: true
  last_transfer: null
  transfer_interval: TransferInterval
  transfer_day: number
  automatic_anticipation_enabled: true
  automatic_anticipation_type: AutomaticAnticipationType
  automatic_anticipation_days: number | null
  automatic_anticipation_1025_delay: number
  anticipatable_volume_percentage: number
  date_created: string
  date_updated: string
  postback_url: string
  status: string
  status_reason: string | null
  bank_account: IBankAccountObject
  register_information: IRegisterInformationIndividual | IRegisterInformationCorporation
}
