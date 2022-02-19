import ISubscriptionItemPricingScheme from './pricing-scheme';

export default interface ISubscriptionItem {
  description: string
  quantity: number
  pricing_scheme: ISubscriptionItemPricingScheme

}
