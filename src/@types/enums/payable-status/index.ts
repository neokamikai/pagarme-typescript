const PayableStatusWaitingFunds = 'waiting_funds';
const PayableStatusPrePaid = 'prepaid';
const PayableStatusPaid = 'paid';

export const PayableStatusEnums = {
  PayableStatusWaitingFunds: PayableStatusWaitingFunds as typeof PayableStatusWaitingFunds,
  PayableStatusPrePaid: PayableStatusPrePaid as typeof PayableStatusPrePaid,
  PayableStatusPaid: PayableStatusPaid as typeof PayableStatusPaid,
};

type PayableStatus = typeof PayableStatusWaitingFunds
| typeof PayableStatusPrePaid
| typeof PayableStatusPaid;

export default PayableStatus;
