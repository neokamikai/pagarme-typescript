import PersonTypeV5 from 'src/@types/enums/person/type/v5';
import RecipientPaymentModeV5Type from 'src/@types/enums/recipient/payment-mode/v5';
import IBankAccountV5 from '../../bank-account/v5';
import IAutomaticAnticipationSettingsV5 from '../../v5/settings/automatic-anticipation';
import ITransferSettingsV5 from '../../v5/settings/transfer';
import IRecipientGatewayRecipientV5 from './gateway';

export default interface IRecipientV5 {
  id: string
  name: string
  email: string
  document: string
  description: string
  type: PersonTypeV5
  payment_mode: RecipientPaymentModeV5Type,
  status: string
  created_at: string
  updated_at: string
  transfer_settings: ITransferSettingsV5,
  default_bank_account: IBankAccountV5,
  gateway_recipients: Array<IRecipientGatewayRecipientV5>,
  automatic_anticipation_settings: IAutomaticAnticipationSettingsV5,
  metadata: {
    [id: string]: string
  }
}
