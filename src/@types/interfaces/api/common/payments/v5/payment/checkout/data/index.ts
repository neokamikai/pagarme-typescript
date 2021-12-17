import { PaymentMethodEnums } from 'src/@types/enums/payment-method/v5';
import IAddress from 'src/@types/interfaces/api/common/address/v5';
import ICheckoutPaymentCheckoutBankTransfer from './bank-transfer';
import ICheckoutPaymentCheckoutBoleto from './boleto';
import ICheckoutPaymentCheckoutCreditCard from './credit-card';
import ICheckoutPaymentCheckoutDebitCard from './debit-card';
import ICheckoutPaymentCheckoutPix from './pix';
import ICheckoutPaymentCheckoutVoucher from './voucher';

type AcceptedPaymentMethod = typeof PaymentMethodEnums.PaymentMethodCreditCard
  | typeof PaymentMethodEnums.PaymentMethodDebitCard
  | typeof PaymentMethodEnums.PaymentMethodPix
  | typeof PaymentMethodEnums.PaymentMethodBoleto
  | typeof PaymentMethodEnums.PaymentMethodVoucher
  | typeof PaymentMethodEnums.PaymentMethodBankTransfer;
type AcceptedMultiPaymentMethods = typeof PaymentMethodEnums.PaymentMethodCreditCard
  | typeof PaymentMethodEnums.PaymentMethodBoleto
  | typeof PaymentMethodEnums.PaymentMethodDebitCard;
export default interface ICheckoutPaymentCheckout {
  /**
   * Meios de pagamento aceitos para o checkout.
   *
   * Valores possíveis: credit_card, debit_card, boleto, voucher e bank_transfer, pix.
   */
  accepted_payment_method: Array<AcceptedPaymentMethod>
  /**
   * Meios de pagamentos aceitos para permitir ao cliente a opção de multimeios.
   *
   * Valores possíveis: credit_card, boleto e credit_card, credit_card .
   */
  accepted_multi_payment_methods: Array<AcceptedMultiPaymentMethods>
  default_payment_method: string
  success_url: string
  debit_card?: ICheckoutPaymentCheckoutDebitCard
  credit_card?: ICheckoutPaymentCheckoutCreditCard
  boleto?: ICheckoutPaymentCheckoutBoleto
  skip_checkout_success_page: boolean
  customer_editable: boolean
  metadata: { [id: string]: string }
  bank_transfer: ICheckoutPaymentCheckoutBankTransfer
  /**
   * Tempo, em minutos, para a expiração do checkout.
   *
   * Caso não seja enviado, o checkout não irá expirar.
   */
  expires_in?: number
  /**
   * Torna o objeto billing address editável.
   */
  billing_address_editable: boolean
  billing_address: IAddress
  voucher?: ICheckoutPaymentCheckoutVoucher
  pix?: ICheckoutPaymentCheckoutPix
}
