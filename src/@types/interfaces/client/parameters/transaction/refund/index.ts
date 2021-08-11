import BankAccountType from 'src/@types/enums/bank-account-type';

export default interface ITransactionRefundParameters<TMetadata extends Object> {
  /**
   * ID da conta bancária. Necessário apenas para estorno de boleto.
   * É possível passar todos os dados da conta também.
   */
  bank_account_id: string
  /**
   * Dígitos que identificam cada banco.
   *
   * Confira a lista dos bancos aqui: http://www.febraban.org.br/associados/utilitarios/Bancos.asp
   */
  bank_code: string
  /**
   * Número da agência bancária
   */
  agencia: string
  /**
   * Dígito verificador da agência. Obrigatório caso o banco o utilize
   */
  agencia_dv: string
  /**
   * Número da conta
   */
  conta: string
  /**
   * Dígito verificador da conta. Obrigatório caso o banco o utilize.
   */
  conta_dv: string
  /**
   * CPF ou CNPJ do favorecido
   */
  document_number: string
  /**
   * Nome/razão social do favorecido, Até 30 caracteres
   */
  legal_name: string
  /**
   * Define se a operação deve ser feita de maneira assíncrona ou não.
   *
   * Caso true(default), a reposta de sua request será enviada via post
   * para sua postback_url cadastrada na respectiva transação.
   *
   * Caso false, no response será enviado o status final de refunded.
   */
  async: boolean
  /**
   * Tipo da conta bancária.
   * Valores possíveis:
   * conta_corrente, conta_poupanca, conta_corrente_conjunta, conta_poupanca_conjunta
   */
  type?: BankAccountType
  /**
   * Você pode passar dados adicionais no estorno da transação
   * para facilitar uma futura análise de dados por seus sistemas.
   */
  metadata: TMetadata
}
