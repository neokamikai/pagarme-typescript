import Customer from '../../../common/customer';

export default interface IUpdateCustomerParameters extends Pick<Customer, 'name' | 'email'>{

}
