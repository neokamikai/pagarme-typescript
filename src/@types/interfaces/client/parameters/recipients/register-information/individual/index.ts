import { PersonTypeEnums } from 'src/@types/enums/person/type';
import IPhoneNumber from 'src/@types/interfaces/client/parameters/common/phone-number';

export default interface IRegisterInformationIndividual {
  type: typeof PersonTypeEnums.PersonTypeIndividual
  document_number: string
  name: string
  site_url: string
  email: string
  phone_numbers: Array<IPhoneNumber>
}
