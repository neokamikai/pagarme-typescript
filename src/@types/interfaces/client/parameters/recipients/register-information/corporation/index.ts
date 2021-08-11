import { PersonTypeEnums } from 'src/@types/enums/person/type';
import IPhoneNumber from 'src/@types/interfaces/client/parameters/common/phone-number';
import IManagingPartner from './managing-partner';

export default interface IRegisterInformationCorporation {
  type: typeof PersonTypeEnums.PersonTypeCorporation
  document_number: string
  name: string
  site_url: string
  email: string
  phone_numbers: Array<IPhoneNumber>
  managing_partners: Array<IManagingPartner>
}
