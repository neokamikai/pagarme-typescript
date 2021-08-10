import PayableStatus from 'src/@types/enums/payable-status';
import PayableType from 'src/@types/enums/payable-type';
import PaymentMethod from 'src/@types/enums/payment-method';

export default interface IPayableObject {
  /**
   * Identificador do recebível
   */
  id: number
  /**
   * Estado atual do recebível.
   * Valores possíveis: waiting_funds, prepaid, paid.
   */
  status: PayableStatus
  /**
   * Valor em centavos que foi pago
   */
  amount: string
  /**
   * Valor em centavos que foi cobrado (taxa)
   */
  fee: string
  /**
   * Valor em centavos que foi cobrado pela respectiva antecipação(caso criada)
   */
  anticipation_fee: number
  /**
   * Número da parcela
   */
  installment: number
  /**
   * Identificador da transação que gerou o recebível
   */
  transaction_id: number
  /**
   * Identificador da regra de split do recebível
   */
  split_rule_id: string
  /**
   * Identificador da antecipação deste recebível, caso tenha sido criada.
   */
  bulk_anticipation_id: string
  /**
   * Identificador do recebedor a qual este recebível pertence
   */
  recipient_id: string
  /**
   * Dia e hora do pagamento (ISODate)
   */
  payment_date: string
  /**
   * Dia de hora de pagamento (ISODate) originais do recebível
   */
  original_payment_date: string
  /**
   * Tipo do recebível.
   * Valores possíveis: credit, refund, refund_reversal, chargeback, chargeback_refund.
   */
  type: PayableType
  /**
   * Tipo de pagamento da transação.
   * Valores possíveis: credit_card, debit_card, boleto.
   */
  payment_method: PaymentMethod
  /**
   * Data(ISODate) em que o banco emissor reconheceu o pagamento
   * da transação a que este recebível pertence.
   */
  accrual_date: string
  /**
   * Data da criação do objeto (ISODate)
   */
  date_created: string
  /**
   * Identificador da liquidação do recebível
   */
  liquidation_arrangement_id: string
}
