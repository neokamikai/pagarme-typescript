import BulkAnticipationStatus from 'src/@types/enums/bulk-anticipation-status';
import BulkAnticipationTimeframe from 'src/@types/enums/bulk-anticipation-timeframe';

export default interface IBulkAnticipationObject {
  object: 'bulk_anticipation',
  amount: number
  anticipation_fee: number
  date_created: string
  date_updated: string
  fee: number
  id: string
  payment_date: string
  status: BulkAnticipationStatus
  timeframe: BulkAnticipationTimeframe
  type: string
}
