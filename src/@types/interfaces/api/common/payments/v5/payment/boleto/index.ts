import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import IBoletoPaymentBoleto from './data';

export default interface IBoletoPayment {
  payment_method: typeof PaymentMethodEnums.PaymentMethodBoleto
  /**
   * Dados sobre o pagamento com boleto (obrigatório caso o payment_method seja boleto).
   */
  boleto: IBoletoPaymentBoleto

  amount: number
}
