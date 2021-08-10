/* credit, refund, refund_reversal, chargeback, chargeback_refund */

const PayableTypeCredit = 'credit';
const PayableTypeRefund = 'refund';
const PayableTypeRefundReversal = 'refund_reversal';
const PayableTypeChargeback = 'chargeback';
const PayableTypeChargebackRefund = 'chargeback_refund';

export const PayableTypeEnums = {
  PayableTypeCredit: PayableTypeCredit as typeof PayableTypeCredit,
  PayableTypeRefund: PayableTypeRefund as typeof PayableTypeRefund,
  PayableTypeRefundReversal: PayableTypeRefundReversal as typeof PayableTypeRefundReversal,
  PayableTypeChargeback: PayableTypeChargeback as typeof PayableTypeChargeback,
  PayableTypeChargebackRefund: PayableTypeChargebackRefund as typeof PayableTypeChargebackRefund,
};

type PayableType = typeof PayableTypeCredit
| typeof PayableTypeRefund
| typeof PayableTypeRefundReversal
| typeof PayableTypeChargeback
| typeof PayableTypeChargebackRefund;

export default PayableType;
