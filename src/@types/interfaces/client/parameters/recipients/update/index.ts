import ICreateBankAccountParameters from '../../bank-account/create';

export default interface IUpdateRecipientParameters<TMetadata extends any = any> {
  /**
   * Frequência na qual o recebedor irá ser pago. Valores possíveis: daily, weekly, monthly
   */
  transfer_interval: 'daily' | 'weekly' | 'monthly'
  /**
   * Dia no qual o recebedor vai ser pago. Depende do transfer_interval.
   *
   * Se for daily, não é necessário.
   *
   * Se for weekly pode ser de 1 (segunda) a 5 (sexta). Se for monthly, pode ser de 1 a 31.
   */
  transfer_day: string
  /**
   * Variável que indica se o recebedor pode receber os pagamentos automaticamente
   */
  transfer_enabled: boolean
  /**
   * Identificador de uma conta bancária previamente criada.
   * Caso você não tenha essa informação, você pode passar os parâmetros
   * necessários para criação de uma conta bancária.
   *
   * OBS: Para atualizar a conta bancária, ela deve obrigatóriamente
   * possuir o mesmo CPF ou CNPJ da conta bancária anterior
   */
  bank_account_id?: string

  /**
   * Dados para criação de uma nova conta bancária no sistema da Pagar.me
   */
  bank_account?: ICreateBankAccountParameters

  /**
   * Porcentagem do valor passível de antecipação para este recebedor.
   */
  anticipatable_volume_percentage?: string

  /**
   * Se o recebedor está habilitado para receber automaticamente
   * ou não o valor disponível para antecipação.
   */
  automatic_anticipation_enabled?: string

  /**
   * Configuração de como devemos criar as antecipações automáticas do recebedor.
   * Valor full para criarmos antecipações seguindo a regra de volume máximo antecipável.
   * Valor 1025, para criarmos antecipações de vendas inteiras, modelos D+X e 10/25.
   */
  automatic_anticipation_type?: string

  /**
   * Lista de dias em que devemos criar as antecipações automáticas.
   */
  automatic_anticipation_days?: string

  /**
   * Parâmetro de quantos dias, contados do dia da antecipação para trás,
   * devemos desconsiderar na criação desta antecipação.
   */
  automatic_anticipation_1025_delay?: string

  /**
   * Objeto com dados adicionais do recebedor.
   */
  metadata: TMetadata
}
