import CardBrandType from 'src/@types/enums/card-brand';

export default interface ICardObject {
  object: 'card'
  /**
   * Identificador do cartão
   */
  id: string
  /**
   * Data de criação do objeto card
   */
  date_created: string
  /**
   * Data de atualização do objeto card
   */
  date_updated: string
  /**
   * Bandeira do cartão
   */
  brand: CardBrandType
  /**
   * Nome do portador do cartão
   */
  holder_name: string
  /**
   * 6 primeiros dígitos do cartão
   */
  first_digits: string
  /**
   * 4 últimos dígitos do cartão
   */
  last_digits: string
  /**
   * Hash que permite comparar dois cartões através de seus fingerprints para saber se são o mesmo.
   */
  country: string
  /**
   * Objeto com dados do comprador
   */
  fingerprint: string
  /**
   * Propriedade para verificar a validade do cartão, ou seja,
   * caso true, é possível cobrar o cartão em condições normais,
   * para false, não pode ser utilizado.
   */
  valid: boolean
  /**
   * Data de expiração do cartão.
   */
  expiration_date: string
}
