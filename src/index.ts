import Client from './domain/client';
import ClientV5 from './domain/client/v5';
import IPaymentV5 from './@types/interfaces/api/common/payments/v5/payment';
/* V5 Common Types */
import IAddressV5 from './@types/interfaces/api/common/address/v5';
import ICustomerV5 from './@types/interfaces/api/common/customer/v5';
import IGeoLocationV5 from './@types/interfaces/api/common/v5/geo-location';
import IShippingV5 from './@types/interfaces/api/common/shipping/v5';
import IPaymentsV5 from './@types/interfaces/api/common/payments/v5';
// export { default as IPaymentV5 } from './@types/interfaces/api/common/payments/v5/payment';
import IPaymentCreditCardV5 from './@types/interfaces/api/common/payments/v5/payment/credit-card';
import IPaymentCreditCardDetailsV5 from './@types/interfaces/api/common/payments/v5/payment/credit-card/data';
import IPaymentCreditCardDetailsCardV5 from './@types/interfaces/api/common/payments/v5/payment/credit-card/data/card';
import IPaymentBoletoV5 from './@types/interfaces/api/common/payments/v5/payment/boleto';
import IPaymentBoletoDetailsV5 from './@types/interfaces/api/common/payments/v5/payment/boleto/data';
import IPaymentPixV5 from './@types/interfaces/api/common/payments/v5/payment/pix';
import IPaymentPixDetailsV5 from './@types/interfaces/api/common/payments/v5/payment/pix/data';
import IPaymentCheckoutV5 from './@types/interfaces/api/common/payments/v5/payment/checkout';
import IPaymentCheckoutDetailsV5 from './@types/interfaces/api/common/payments/v5/payment/checkout/data';
import IPaymentVoucherV5 from './@types/interfaces/api/common/payments/v5/payment/voucher';
import IPaymentVoucherDetailsV5 from './@types/interfaces/api/common/payments/v5/payment/voucher/data';
import IPaymentBankTransferV5 from './@types/interfaces/api/common/payments/v5/payment/bank-transfer';
import IPaymentBankTransferDetailsV5 from './@types/interfaces/api/common/payments/v5/payment/bank-transfer/data';
import IPaymentCashV5 from './@types/interfaces/api/common/payments/v5/payment/cash';
import IPaymentCashDetailsV5 from './@types/interfaces/api/common/payments/v5/payment/cash/data';
import IPaymentSafetyPayV5 from './@types/interfaces/api/common/payments/v5/payment/safety-pay';
/* API Types */
import ICreateOrderRequestPayloadV5 from './@types/interfaces/api/request-payloads/v5/order/create';
import ICreateOrderRequestPayloadItemV5 from './@types/interfaces/api/request-payloads/v5/order/create/item';
import IDeviceInfo from './@types/interfaces/api/common/v5/device';

import CustomerGenderType, { CustomerGenderEnums } from './@types/enums/customer/v5/gender';
import CustomerTypeV5, { CustomerTypeEnums } from './@types/enums/customer/v5/type';

import PaymentMethodType, { PaymentMethodEnums } from './@types/enums/payment-method/v5';
import detectCardBrandV5 from './core/helpers/detect-card-brand/v5';
import ApiResponses from './@types/interfaces/api/responses';
import ICreateRecipientPayloadV5 from './@types/interfaces/api/request-payloads/v5/recipient/create';
import IRecipientV5 from './@types/interfaces/api/common/recipient/v5';
import PersonTypeV5 from './@types/enums/person/type/v5';
import IBankAccountV5 from './@types/interfaces/api/common/bank-account/v5';
import IAutomaticAnticipationSettingsV5 from './@types/interfaces/api/common/v5/settings/automatic-anticipation';
import IRecipientGatewayRecipientV5 from './@types/interfaces/api/common/recipient/v5/gateway';
import ITransferSettingsV5 from './@types/interfaces/api/common/v5/settings/transfer';
import RecipientPaymentModeV5Type from './@types/enums/recipient/payment-mode/v5';
import IUpdateRecipientPayload from './@types/interfaces/api/request-payloads/v5/recipient/update';
import ISplitV5 from './@types/interfaces/api/request-payloads/v5/order/create/split';
import ISplitOptionsV5 from './@types/interfaces/api/request-payloads/v5/order/create/split/options';
import SplitTypeEnumV5 from './@types/enums/split-type/v5';
import IListRecipientsPayload from './@types/interfaces/api/request-payloads/v5/recipient/list';

export { IPaymentV5 };
export namespace PagarMe {
  export namespace V5 {
    export namespace Utils {
      export const detectCardBrand = detectCardBrandV5;
    }
    export type Client = ClientV5;
    export namespace Types {
      export namespace Common {
        export namespace Customer {
          export type Gender = CustomerGenderType;
          export namespace Gender {
            export type Male = typeof CustomerGenderEnums.CustomerGenderMale;
            export type Female = typeof CustomerGenderEnums.CustomerGenderFemale;
          }
          export type Type = CustomerTypeV5;
          export namespace Type {
            export type Individual = typeof CustomerTypeEnums.CustomerTypeIndividual;
            export type Comçany = typeof CustomerTypeEnums.CustomerTypeCompany;
          }
        }
        export namespace Payment {
          export type Method = PaymentMethodType;
          export namespace Method {
            export type CreditCard = typeof PaymentMethodEnums.PaymentMethodCreditCard;
            export type Boleto = typeof PaymentMethodEnums.PaymentMethodBoleto;
            export type Voucher = typeof PaymentMethodEnums.PaymentMethodVoucher;
            export type BankTransfer = typeof PaymentMethodEnums.PaymentMethodBankTransfer;
            export type SafetyPay = typeof PaymentMethodEnums.PaymentMethodSafetyPay;
            export type Checkout = typeof PaymentMethodEnums.PaymentMethodCheckout;
            export type Cash = typeof PaymentMethodEnums.PaymentMethodCash;
            export type Pix = typeof PaymentMethodEnums.PaymentMethodPix;
            export type DebitCard = typeof PaymentMethodEnums.PaymentMethodDebitCard;
          }
        }
        export namespace Recipient {
          export type RecipientPaymentModeType = RecipientPaymentModeV5Type;
          export type ITransferSettings = ITransferSettingsV5;
          export type IRecipientGatewayRecipient = IRecipientGatewayRecipientV5;
          export type IAutomaticAnticipationSettings = IAutomaticAnticipationSettingsV5;
        }
        export type IBankAccount = IBankAccountV5;
        export type PersonType = PersonTypeV5;
        export type IPayment = IPaymentV5;
        export type IAddress = IAddressV5;
        export type ICustomer = ICustomerV5;
        export type IGeoLocation = IGeoLocationV5;
        export type IShipping = IShippingV5;
        export type IPayments = IPaymentsV5;
        export type IDevice = IDeviceInfo;
        export type IRecipient = IRecipientV5;
      }
      export namespace Payment {
        export type ICreditCard = IPaymentCreditCardV5;
        export namespace CreditCard {
          export type IDetails = IPaymentCreditCardDetailsV5;
          export type ICard = IPaymentCreditCardDetailsCardV5;
        }
        export type IBoleto = IPaymentBoletoV5;
        export namespace Boleto {
          export type IDetails = IPaymentBoletoDetailsV5;
        }
        export type IPix = IPaymentPixV5;
        export namespace Pix {
          export type IDetails = IPaymentPixDetailsV5;
        }
        export type ICheckout = IPaymentCheckoutV5;
        export namespace Checkout {
          export type IDetails = IPaymentCheckoutDetailsV5;
        }
        export type IVoucher = IPaymentVoucherV5;
        export namespace Voucher {
          export type IVoucherDetails = IPaymentVoucherDetailsV5;
        }
        export type IBankTransfer = IPaymentBankTransferV5;
        export namespace BankTransfer {
          export type IDetails = IPaymentBankTransferDetailsV5;
        }
        export type ICash = IPaymentCashV5;
        export namespace Cash {
          export type IDetails = IPaymentCashDetailsV5;
        }
        export type ISafetyPay = IPaymentSafetyPayV5;
      }
      export namespace API {
        export namespace Recipient {
          export namespace Create {
            export namespace Request {
              export type Payload = ICreateRecipientPayloadV5;
            }
            export namespace Response {
              export type Body = ApiResponses.V5.Recipient.Create;
            }
          }
          export namespace Update {
            export namespace Request {
              export type Payload = IUpdateRecipientPayload;
            }
            export namespace Response {
              export type Body = ApiResponses.V5.Recipient.Update;
            }
          }
          export namespace Balance {
            export namespace Request {
              /** recipient ID only */
              export type Payload = string;
            }
            export namespace Response {
              export type Body = ApiResponses.V5.Recipient.Balance;
            }
          }
          export namespace List {
            export namespace Request {
              export type Payload = IListRecipientsPayload;
            }
            export namespace Response {
              export type Body = ApiResponses.V5.Recipient.List;
            }
          }
          export namespace Detail {
            export namespace Request {
              /**
               * Recipient Id
               */
              export type Payload = string;
            }
            export namespace Response {
              export type Body = ApiResponses.V5.Recipient.Detail;
            }
          }
        }
        export namespace Order {
          export namespace Create {
            export namespace Request {
              export type OrderPayload = ICreateOrderRequestPayloadV5;
              export type OrderItem = ICreateOrderRequestPayloadItemV5;
              export type Split = ISplitV5;
              export namespace Enums {
                export type SplitType = SplitTypeEnumV5;
              }
              export type SplitOptions = ISplitOptionsV5;
            }
          }
        }
      }
    }
  }
}

export default {
  Client,
  ClientV5,
};
