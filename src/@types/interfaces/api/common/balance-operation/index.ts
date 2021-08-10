import IPayableObject from '../payable';

export default interface IBalanceOperationObject {
  object: 'balance_operation'
  id: number
  status: string
  type: string
  amount: number
  fee: number
  date_created: string
  movement_object: IPayableObject
}
