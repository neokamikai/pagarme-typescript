import TransferIntervalV5 from 'src/@types/enums/transfer-interval/v5';

export default interface ITransferSettingsV5Input {
  /**
   * Indica se o recebedor receberá seus pagamentos automaticamente.
   */
  transfer_enabled: boolean
  /**
   * Indica a frequência das transferências automáticas para a conta do recebedor.
   * Valores possiveis: "Daily", "Weelky", "Monthly"
   */
  transfer_interval: TransferIntervalV5
  /**
   * Indica o dia em que ocorrerá as transferências automáticas.
   */
  transfer_day: string
}
