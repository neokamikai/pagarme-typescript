import ChargeBackStatus from 'src/@types/enums/charge-back-status';

export default interface IChargebacksGetListParameters {
  /**
   * Filtro para um dos status: presented, represented.
   */
  status?: ChargeBackStatus
  /**
   * Filtro pelo ID da transação.
   */
  transaction_id?: number
  /**
   * Filtro de parcelas do chargeback.
   */
  installment?: string
  /**
   * Filtro pela data de criação.
   */
  created_at?: string
  /**
   * Filtro pela data de atualização.
   */
  updated_at?: string
  /**
   * Filtro pela data em que o chargeback foi informado.
   */
  accrual_date?: string
  /**
   * Filtro pelo código do motivo da solicitação do chargeback.
   */
  reason_code?: string
}
