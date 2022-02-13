import OrderStatusType from 'src/@types/enums/order-status';
import PaymentMethod from 'src/@types/enums/payment-method/v5';
import CustomerV5 from '../../customer';

export default interface OrderV5Charge {
  id: string
  code: string
  gateway_id: string
  amount: number
  paid_amount: number
  status: OrderStatusType
  currency: string
  payment_method: PaymentMethod
  paid_at: string
  created_at: string
  updated_at: string
  customer: CustomerV5
}
