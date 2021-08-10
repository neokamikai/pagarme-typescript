import CardBrandType from 'src/@types/enums/card-brand';
import ChargeBackStatus from 'src/@types/enums/charge-back-status';

export default interface IChargebackObject {
  object: 'chargeback'
  /**
   * Número identificador do chargeback.
   */
  id: string
  /**
   * Número de parcelas do chargeback.
   */
  installment: string
  /**
   * Número identificador da transação que gerou o chargeback.
   */
  transaction_id: number
  /**
   * Valor, em centavos, da transação.
   *
   * Exemplo: R$100,00 = 10000
   */
  amount: string
  /**
   * Código do motivo da solicitação do chargeback.
   */
  reason_code: string
  /**
   * Bandeira do cartão.
   */
  card_brand: CardBrandType
  /**
   * Data de atualização do chargeback no formato ISODate.
   */
  updated_at: string
  /**
   * Data de criação do chargeback no formato ISODate.
   */
  created_at: string
  /**
   * Data em que o chargeback foi informado no formato ISODate.
   */
  accrual_date: string
  /**
   * Representa o estado do chargeback.
   *
   * Valores possíveis: presented, represented.
   */
  status: ChargeBackStatus
  /**
   * Representa o ciclo do chargeback
   *
   * Valores possíveis: 1 e 2
   */
  cycle: 1 | 2
}
