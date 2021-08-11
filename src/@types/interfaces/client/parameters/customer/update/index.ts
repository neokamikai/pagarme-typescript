import Customer from '../../../common/customer';

export default interface UpdateCustomerParameters extends Pick<Customer, 'name' | 'email'>{

}
