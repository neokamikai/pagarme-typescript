import IAddress from '../../address';

export default interface ICompanyManagingPartner {
  name: string
  cpf: string
  phone_number: string
  mother_name: string | null
  birthday: string | null
  address: Partial<IAddress>
}
