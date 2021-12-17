import PaymentMethod from 'src/@types/enums/payment-method/v5';

export default interface IPayment {
  payment_method: PaymentMethod
  amount: number
}
