import IncrementType from 'src/@types/enums/subscriptions/increment-type/v5';

export default interface ISubscriptionIncrement {
  value: number
  cycles: number
  increment_type: IncrementType
}
