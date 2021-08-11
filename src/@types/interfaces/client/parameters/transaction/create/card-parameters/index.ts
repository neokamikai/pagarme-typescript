export interface IWithCardHash {
  payment_method: 'credit_card'
  /**
   * Informações do cartão do cliente criptografadas em sua aplicação.
   *
   * OBS: apenas para transações de Cartão de crédito você deve passar o
   * card_hash ou card_id.
   *
   * Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável.
   */
  card_hash: string
}

export interface IWithCardId {
  payment_method: 'credit_card'

  /**
   * Ao realizar uma transação, retornamos o card_id do cartão,
   * para que nas próximas transações ele possa ser utilizado
   * como forma de identificar os dados de pagamento.
   *
   * Exemplo de utilização: One-click buy.
   *
   * OBS: apenas para transações de Cartão de crédito você deve passar o
   * card_hash ou card_id.
   *
   * Caso inclua os dados do cartão diretamente pelo código, esse campo torna-se dispensável.
   */
  card_id: string;
  /**
   * Código verificador do cartão.
   *
   * OBS: O card_cvv deve ser passado somente para transações de Cartão de crédito.
   *
   * Esse parâmetro também pode ser passado em conjunto com o card_id,
   *
   * para validarmos seu CVV na criação da transação.
   */
  card_cvv?: string
}

export interface IWithDataForNewCard {
  payment_method: 'credit_card'
  /**
   * Nome do portador do cartão.
   *
   * OBS: apenas para transações de Cartão de crédito você deve passar o card_holder_name
   */
  card_holder_name: string;
  /**
   * Data de validade do cartão no formato MMAA.
   *
   * OBS: apenas para transações de Cartão de crédito você deve passar o card_expiration_date
   */
  card_expiration_date: string;
  /**
   * Número do cartão.
   *
   * OBS: apenas para transações de Cartão de crédito você deve passar o card_number
   */
  card_number: string
  /**
   * Código verificador do cartão.
   *
   * OBS: O card_cvv deve ser passado somente para transações de Cartão de crédito.
   *
   * Esse parâmetro também pode ser passado em conjunto com o card_id,
   *
   * para validarmos seu CVV na criação da transação.
   */
  card_cvv: string
}

type ITransactionCardParameters = IWithCardHash
| IWithCardId
| IWithDataForNewCard;

export default ITransactionCardParameters;
