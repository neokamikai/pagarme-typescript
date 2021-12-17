import IAddress from 'src/@types/interfaces/api/common/address/v5';

export default interface ICreditCardPaymentCreditCardCard {
  /**
   * Número do cartão. Entre 13 e 19 caracteres
   *
   * @example 4000000000000010
   */
  number: string
  /**
   * Nome do portador como está impresso no cartão.
   *
   * Máximo de 64 caracteres (Caracteres especiais e números não são aceitos)
   */
  holder_name: string
  /**
   * CPF ou CNPJ do portador do cartão.
   *
   * Obrigatório caso o tipo do cartão seja voucher (bandeiras VR ou Sodexo).
   */
  holder_document?: string
  /**
   * Mês de validade do cartão. Valor entre 1 e 12 (inclusive)
   */
  exp_month: string
  /**
   * Código de segurança do cartão. O campo aceita 4 ou 3 caracteres, variando por bandeira.
   */
  cvv: string
  /**
   * Bandeira do cartão. Para cartões de crédito, temos como valores possíveis:
   * Elo, Mastercard, Visa, Amex, JCB, Aura, Hipercard, Diners ou Discover.
   *
   * Para voucher, temos como valores possíveis:
   * Alelo, VR ou Sodexo.
   */
  brand: string
  /**
   * Indica a label do cartão
   */
  label: string
  /**
   * Código do endereço de cobrança. Max: 36 caracteres.
   *
   * Opcional, pode ser utilizado no lugar do billing_address.
   */
  billing_address_id?: string
  /**
   * Endereço de cobrança
   */
  billing_address: IAddress
}
