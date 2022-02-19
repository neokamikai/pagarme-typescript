import DiscountType from 'src/@types/enums/subscriptions/discount-type/v5';

export default interface ISubscriptionDiscount {
  cycles: number
  value: number
  discount_type: DiscountType
}
