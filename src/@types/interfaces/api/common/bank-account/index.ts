import BankAccountType from 'src/@types/enums/bank-account-type';

export default interface IBankAccountObject {
  object: 'bank_account',
  id: 17365090,
  bank_code: string
  agencia: string
  agencia_dv: string
  conta: string
  conta_dv: string
  type: BankAccountType
  document_type: string
  document_number: string
  legal_name: string
  charge_transfer_fees: boolean
  date_created: string
}
