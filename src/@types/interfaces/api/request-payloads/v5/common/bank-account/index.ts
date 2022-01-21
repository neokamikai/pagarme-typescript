import BankAccountTypeV5 from 'src/@types/enums/bank-account-type/v5';
import PersonType from 'src/@types/enums/person/type';

export default interface IBankAccountInputV5 {
  /**
   * Nome da conta. Max: 30 caracteres
   */
  holder_name: string
  /**
   * Número da conta. Max 3 caracteres numéricos
   */
  bank: string
  /**
   * Número da agência. Max 4 caracteres
   */
  branch_number: string
  /**
   * Digito validador da agência. Max: 1 caracter numérico
   */
  branch_check_digit: string
  /**
   * Número da conta. Max: 13 caracteres numéricos
   */
  account_number: string
  /**
   * Digitos validadores da conta. Max 2 caracteres numéricos
   */
  account_check_digit: string
  /**
   * Tipo do documento. "individual" ou "company"
   */
  holder_type: PersonType
  /**
   * Número do documento do titular da conta.
   * Deve ser igual ao documento do recebedor. Somente números
   */
  holder_document: string
  /**
   * Tipo da conta. Valores Possiveis: "checking" ou "savings"
   */
  type: BankAccountTypeV5
}
