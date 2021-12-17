import IBoletoPaymentBoleto from '../../../boleto/data';

export default interface ICheckoutPaymentCheckoutBoleto extends IBoletoPaymentBoleto {
  /**
   * Data de vencimento do boleto.
   */
  due_at: string
  /**
   * Instruções do boleto.
   */
  instructions: string
}
