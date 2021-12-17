import IAddress from '../../address/v5';

export default interface IShipping {
  /**
   * Valor da entrega.
   */
  amount: number
  /**
   * Descrição da entrega.
   */
  description: string
  /**
   * Destinatário da entrega.
   */
  recipient_name: string
  /**
   * Telefone do destinatário.
   */
  recipient_phone: string

  address: IAddress
}
