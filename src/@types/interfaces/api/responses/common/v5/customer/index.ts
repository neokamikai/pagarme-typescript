import ICustomerObjectV5 from 'src/@types/interfaces/api/common/customer/v5';

export default interface CustomerV5 extends ICustomerObjectV5 {
  id: string
  delinquent: boolean
  created_at: string
  updated_at: string
}
