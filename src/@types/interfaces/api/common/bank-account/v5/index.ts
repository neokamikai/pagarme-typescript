import BankAccountTypeV5 from 'src/@types/enums/bank-account-type/v5';
import PersonType from 'src/@types/enums/person/type/v5';

export default interface IBankAccountV5 {
  id: string
  holder_name: string
  holder_type: PersonType
  holder_document: string
  bank: string
  branch_number: string
  branch_check_digit: string
  account_number: string
  account_check_digit: string
  type: BankAccountTypeV5
  status: string
  created_at: string
  updated_at: string
  metadata: {
    [id: string]: string
  }
}
