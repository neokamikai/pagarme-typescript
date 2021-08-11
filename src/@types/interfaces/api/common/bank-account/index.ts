import BankAccountType from 'src/@types/enums/bank-account-type';

export default interface IBankAccountObject {
  object: 'bank_account',
  id: number,
  /**
   * Código do banco da conta
   */
  bank_code: string
  /**
   * Agencia do banco da conta
   */
  agencia: string
  /**
   * Apenas números, deve conter somente 1 dígito
   */
  agencia_dv: string
  /**
   * Número da conta
   */
  conta: string
  /**
   * Dígito verificador da conta
   */
  conta_dv: string
  /**
   * Tipo da conta. Pode ser:
   * * conta_corrente
   * * conta_poupanca
   * * conta_corrente_conjunta
   * * conta_poupanca_conjunta
   */
  type: BankAccountType
  /** Não utilizado */
  document_type: string
  /**
   * CPF/CNPJ atrelado à conta
   */
  document_number: string
  /**
   * Nome/Razão social do dono da conta
   */
  legal_name: string
  /**
   * Não utilizado
   */
  charge_transfer_fees: boolean
  /**
   * Data de criação da conta na Pagar.me
   */
  date_created: string
}
