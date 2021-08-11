import IAddress from 'src/@types/interfaces/api/common/address';

export default interface IShippingInput {
  /**
   * Obrigatório. Nome da entidade de cobrança
   */
  name: string
  /**
   * Obrigatório. Taxa de envio cobrada do comprador.
   * Por exemplo, se a taxa de envio é de dez reais e
   * três centavos (R$10,03), o valor deve ser fornecido como ‘1003’
   */
  fee: number
  /**
   * Data de entrega. Estimativa fornecida no formato AAAA-MM-DD
   */
  delivery_date: string
  /**
   * Entrega expressa. Se for entrega expressa, deve conter ‘true’ (sim).
   * Caso contrário, deve conter ‘false’ (não)
   */
  expedited: boolean
  /**
   * Obrigatório. Dados do endereço de envio.
   */
  address: IAddress
}
