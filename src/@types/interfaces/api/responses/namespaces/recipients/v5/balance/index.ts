import IRecipientV5 from 'src/@types/interfaces/api/common/recipient/v5';

export default interface IBalanceRecipientV5Response {
  currency: 'BRL'
  available_amount: number
  waiting_funds_amount: number
  transferred_amount: number
  recipient: Pick<IRecipientV5, 'id' | 'name' | 'email' | 'document' | 'description' | 'type' | 'status' | 'created_at' | 'updated_at'>
}
