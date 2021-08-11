export default interface ITransactionEventObject {
  object: 'event',
  id: string
  name: string
  model: string
  model_id: string
  payload: any,
  date_created: string
  date_updated: string
}
