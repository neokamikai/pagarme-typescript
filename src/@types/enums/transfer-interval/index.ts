const TransferIntervalDaily = 'daily';
const TransferIntervalWeekly = 'weekly';
const TransferIntervalMonthly = 'monthly';

export const TransferIntervalEnums = {
  TransferIntervalDaily: TransferIntervalDaily as typeof TransferIntervalDaily,
  TransferIntervalWeekly: TransferIntervalWeekly as typeof TransferIntervalWeekly,
  TransferIntervalMonthly: TransferIntervalMonthly as typeof TransferIntervalMonthly,
};
type TransferInterval = typeof TransferIntervalDaily
  | typeof TransferIntervalWeekly
  | typeof TransferIntervalMonthly;

export default TransferInterval;
