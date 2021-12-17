import ICreditCardPaymentCreditCardCard from '../../credit-card/data/card';

export default interface IVoucherPaymentVoucher {
  statement_descriptor: string
  card?: ICreditCardPaymentCreditCardCard & { holder_document: string }
  card_id?: string
  card_token?: string
  metadata: { [id: string]: any }
}
