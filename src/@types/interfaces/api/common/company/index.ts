import IAddress from '../address';
import ICompanyAccounManager from './account-manager';
import ICompanyAnticipationConfig from './anticipation-config';
import ICompanyBranding from './branding';
import ICompanyEnvironmentsConfig from './environments';
import ICompanyManagingPartner from './managing-partner';
import ICompanyMarketplacePermissions from './marketplace';

export default interface ICompanyObject {
  object: 'company',
  name: string,
  pagarme_code: string,
  stone_code: null,
  phone_number: string,
  site_url: string,
  statement_descriptor: null,
  full_name: string,
  type: string,
  cnpj: string,
  mcc: null,
  segment: null,
  address: IAddress,
  marketplace: ICompanyEnvironmentsConfig<ICompanyMarketplacePermissions>,
  managing_partner: ICompanyManagingPartner,
  account_manager: ICompanyAccounManager,
  anticipation_config: ICompanyAnticipationConfig,
  status: string
  seller_id: string,
  id: string
  date_created: string
  preferences: { [id: string]: any },
  branding: ICompanyBranding,
  default_recipient_id: string,
  events: {
    transaction: {
      transaction_status_changed: {
        postback: boolean
      }
    },
    subscription: {
      subscription_status_changed: {
        postback: boolean
      },
      transaction_created: {
        postback: boolean
      }
    },
    recipient: {
      recipient_status_changed: {
        postback: boolean
      }
    }
  },
  transactions: {
    enforce_zipcode_existence: boolean
  },
  pricing: {
    gateway: {
      live: {
        transaction_cost: {
          credit_card: 0,
          debit_card: 0,
          boleto: 0
        },
        transaction_spread: {
          credit_card: 0,
          debit_card: 0,
          boleto: 0
        },
        minimum_monthly_payment: 0,
        antifraud_cost: [
          {
            name: 'pagarme',
            cost: 0
          },
        ],
        boletos: {
          payment_fixed_fee: 1,
          payment_spread_fee: 0
        }
      }
    },
    psp: {
      live: {
        anticipation: number,
        mdrs: [
          {
            _id: string,
            installments: Array<{
              installment: number,
              mdr: number,
              _id: string,
            }>,
            payment_method: string,
            capture_method: string,
            card_brand: string
          },
        ]
      }
    },
    transfers: {
      credito_em_conta: number,
      ted: number,
      doc: number,
      inter_recipient: number,
    }
  },
  boletos: {
    instrucoes: string,
    days_to_add_in_expiration_date: number,
    rules: string[]
  },
  notifications: {
    live: [],
    test: []
  },
  api_version: ICompanyEnvironmentsConfig<string>,
  payment_link: {
    allow_charge_transaction_fee: boolean
  },
  capabilities: {
    allow_dashboard_login: boolean,
    allow_transaction_anticipation: boolean,
    allow_compulsory_anticipation: boolean,
    allow_chatbot: boolean,
    allow_chat: boolean,
    allow_payment_link: boolean,
    allow_manage_recipient: boolean,
    allow_reprocess_without_antifraud: boolean,
    allow_reimburse_anticipation_fee: boolean
  },
  max_chargeback_index: number,
  transfers: {
    blocked_balance_amount: number
  },
  api_key: ICompanyEnvironmentsConfig<string>,
  users: Array<{
    object: 'user',
    id: string,
    email: string,
    name: string,
    permission: string,
    date_created: string
  }>,
  encryption_key: ICompanyEnvironmentsConfig<string>,
  subscriptions: {
    payment_deadline: number,
    email_customers: boolean,
    charge_attempts: number,
    charges_interval_in_days: number,
    cancel_after_failed_charges: boolean,
    customer_can_cancel_subscription: boolean,
    use_proportional_amount_on_downgrade: boolean
  },
  transaction_cost: {
    credit_card: number,
    debit_card: number,
    boleto: number,
  },
  transaction_spread: {
    credit_card: number,
    debit_card: number,
    boleto: number,
  },
  antifraud: {
    test: {
      fraud_covered: boolean,
      fraud_coverage_fee: number,
      providers: any[],
      manual_review: {
        enabled: boolean
      },
      enabled: boolean,
      last_enabled_change: string,
      rule: ''
    },
    live: {
      fraud_covered: boolean,
      fraud_coverage_fee: number,
      providers: any[],
      manual_review: {
        enabled: boolean
      },
      enabled: boolean,
      last_enabled_change: string,
      rule: ''
    }
  },
  customer_manager: {
    id: string,
    name: string,
    email: string,
  }
}
