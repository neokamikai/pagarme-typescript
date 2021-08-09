import IBalanceObjectInfo from './info';

export default interface IBalanceObject {
  object: 'balance',
  waiting_funds: IBalanceObjectInfo
  available: IBalanceObjectInfo
  transferred: IBalanceObjectInfo
}
