const SubscriptionBillingTypePrepaid = 'prepaid';
const SubscriptionBillingTypePostpaid = 'postpaid';
const SubscriptionBillingTypeExactDay = 'exactDay';

export const SubscriptionBillingTypeEnums = {
  prepaid: SubscriptionBillingTypePrepaid as typeof SubscriptionBillingTypePrepaid,
  postpaid: SubscriptionBillingTypePostpaid as typeof SubscriptionBillingTypePostpaid,
  exactday: SubscriptionBillingTypeExactDay as typeof SubscriptionBillingTypeExactDay,
};

type SubscriptionBillingType =
  | typeof SubscriptionBillingTypePrepaid
  | typeof SubscriptionBillingTypePostpaid
  | typeof SubscriptionBillingTypeExactDay;

export default SubscriptionBillingType;
