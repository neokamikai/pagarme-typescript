const TransferIntervalV5Daily = 'Daily';
const TransferIntervalV5Weekly = 'Weekly';
const TransferIntervalV5Monthly = 'Monthly';

export const TransferIntervalV5Enums = {
  TransferIntervalV5Daily: TransferIntervalV5Daily as typeof TransferIntervalV5Daily,
  TransferIntervalV5Weekly: TransferIntervalV5Weekly as typeof TransferIntervalV5Weekly,
  TransferIntervalV5Monthly: TransferIntervalV5Monthly as typeof TransferIntervalV5Monthly,
};
type TransferIntervalV5 = typeof TransferIntervalV5Daily
  | typeof TransferIntervalV5Weekly
  | typeof TransferIntervalV5Monthly;

export default TransferIntervalV5;
