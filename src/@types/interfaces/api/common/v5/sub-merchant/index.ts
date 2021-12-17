import CustomerType from 'src/@types/enums/customer/v5/type';
import IAddress from '../../address/v5';
import IPhones from '../../phones';

export default interface ISubMerchant {
  Merchant_Category_Code: string
  Payment_Facilitator_Code: string
  Code: string
  name: string
  Document: string
  Type: CustomerType
  phones: IPhones
  Address: IAddress

}
