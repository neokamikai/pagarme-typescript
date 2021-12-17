export default interface IAddress {
  /**
   * País (Código do país no formato ISO 3166-1 alpha-2)(2 digitos)
   */
  country: string
  /**
   * Estado (Código do estado no formato ISO 3166-2).
   */
  state: string
  /**
   * Cidade
   */
  city: string
  /**
   * Código Postal (CEP) (Apenas numérico).
   */
  zip_code: string
  /**
   * Obrigatório. Dados principais do endereço.
   * Neste campo deve ser informado Número, Rua, Bairro, nesta ordem e separados por vírgula.
   */
  line_1: string
  /**
   * Dados complementares do endereço. Neste campo pode ser informado complemento, referências.
   */
  line_2?: string
}
