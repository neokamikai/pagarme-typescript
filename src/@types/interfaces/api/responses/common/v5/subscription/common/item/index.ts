import SubscriptionItemPricingScheme from './pricing-scheme';

export default interface SubscriptionItem {
  id: string
  name: string
  description: string
  quantity: number
  status: string
  created_at: string
  updated_at: string
  pricing_scheme: SubscriptionItemPricingScheme
}
