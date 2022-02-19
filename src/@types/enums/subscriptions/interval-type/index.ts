const SubscriptionIntervalTypeDay = 'day';
const SubscriptionIntervalTypeWeek = 'week';
const SubscriptionIntervalTypeMonth = 'month';
const SubscriptionIntervalTypeYear = 'year';

export const SubscriptionIntervalTypeEnums = {
  day: SubscriptionIntervalTypeDay as typeof SubscriptionIntervalTypeDay,
  week: SubscriptionIntervalTypeWeek as typeof SubscriptionIntervalTypeWeek,
  month: SubscriptionIntervalTypeMonth as typeof SubscriptionIntervalTypeMonth,
  year: SubscriptionIntervalTypeYear as typeof SubscriptionIntervalTypeYear,
};
type SubscriptionIntervalType =
  | typeof SubscriptionIntervalTypeDay
  | typeof SubscriptionIntervalTypeWeek
  | typeof SubscriptionIntervalTypeMonth
  | typeof SubscriptionIntervalTypeYear;

export default SubscriptionIntervalType;
