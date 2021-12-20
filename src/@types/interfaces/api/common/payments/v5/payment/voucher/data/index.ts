import VoucherCardBrandTypeV5 from 'src/@types/enums/card-brand/v5/voucher';
import ICreditCardPaymentCreditCardCard from '../../credit-card/data/card';

export default interface IVoucherPaymentVoucher {
  statement_descriptor: string
  card?: Omit<ICreditCardPaymentCreditCardCard, 'brand'> & { holder_document: string, brand?: VoucherCardBrandTypeV5 }
  card_id?: string
  card_token?: string
  metadata: { [id: string]: any }
}
