import SubscriptionCycle from '../cycle';

export default interface BaseSubscription {
  id: string
  code: string
  start_at: string
  interval: string
  interval_count: number
  billing_type: string
  current_cycle: SubscriptionCycle
  next_billing_at: string
  payment_method: string
  currency: string
  installments: number
  status: string
  created_at: string
  updated_at: string
}
