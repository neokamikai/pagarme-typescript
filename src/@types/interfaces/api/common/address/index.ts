export default interface IAddress {
  /**
   * Obrigatório. Rua
   */
  street: string
  /**
   * Obrigatório. Número
   */
  street_number: string
  /**
   * Obrigatório. CEP. Para endereço brasileiro, deve conter uma numeração de 8 dígitos
   */
  zipcode: string
  /**
   * Obrigatório. País. Duas letras minúsculas. Deve seguir o padão ISO 3166-1 alpha-2
   */
  country: string
  /**
   * Obrigatório. Estado
   */
  state: string
  /**
   * Obrigatório. Cidade
   */
  city: string
  /**
   * Bairro
   */
  neighborhood?: string
  /**
   * Complemento. Não pode ser uma string vazia nem null
   */
  complementary?: string
}
