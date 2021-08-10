import BankAccountType from 'src/@types/enums/bank-account-type';

export default interface ICreateBankAccountParameters {

  /** Código do banco da conta */
  bank_code:string

  /** Agencia do banco da conta */
  agencia: string
  /**
   * Apenas números, deve conter somente 1 dígito
   */
  agencia_dv: string

  /** Número da conta */
  conta:string

  /**
   * Tipo da conta. Pode ser: conta_corrente, conta_poupanca,
   * conta_corrente_conjunta, conta_poupanca_conjunta
   */
  type?: BankAccountType

  /** Dígito verificador da conta */
  conta_dv:string

  /** CPF/CNPJ atrelado à conta */
  document_number:string

  /** Nome/Razão social do dono da conta */
  legal_name:string

}
