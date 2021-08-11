export default interface ITransactionOperation<TMetadata extends Object = any> {
  id: string
  date_created: string
  date_updated: string
  status: string
  fail_reason: string,
  type: string
  rollbacked: boolean,
  model: string
  model_id: string
  group_id: string
  next_group_id: string,
  request_id: string
  started_at: number,
  ended_at: number,
  processor: string
  processor_response_code: string,
  metadata: TMetadata
}
