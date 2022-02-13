import OrderStatusType from 'src/@types/enums/order-status';
import IShipping from 'src/@types/interfaces/api/common/shipping/v5';
import CustomerV5 from '../customer';
import OrderV5Charge from './charge';
import OrderV5Item from './item';

export default interface OrderV5 {
  id: string
  code: string
  amount: number
  /**
   * @example BRL
   */
  currency: string
  closed: true,
  items: Array<OrderV5Item>
  customer: CustomerV5
  shipping: IShipping
  status: OrderStatusType
  created_at: string
  updated_at: string
  charges: Array<OrderV5Charge>
}
