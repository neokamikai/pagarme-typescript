import ICustomerObject from 'src/@types/interfaces/api/common/customer';

export default interface IUpdateCustomerParameters
  extends Pick<ICustomerObject, 'name' | 'email'> {

}
