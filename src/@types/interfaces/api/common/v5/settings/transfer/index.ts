import TransferIntervalV5 from 'src/@types/enums/transfer-interval/v5';

export default interface ITransferSettingsV5 {
  transfer_enabled: boolean
  transfer_interval: TransferIntervalV5
  transfer_day: number
}
