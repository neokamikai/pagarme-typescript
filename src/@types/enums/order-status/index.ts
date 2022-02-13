const OrderStatusTypePaid = 'paid';
const OrderStatusTypePending = 'pending';
const OrderStatusTypeCanceled = 'canceled';
const OrderStatusTypeFailed = 'failed';

export const OrderStatusTypeEnums = {
  paid: OrderStatusTypePaid as typeof OrderStatusTypePaid,
  pending: OrderStatusTypePending as typeof OrderStatusTypePending,
  canceled: OrderStatusTypeCanceled as typeof OrderStatusTypeCanceled,
  failed: OrderStatusTypeFailed as typeof OrderStatusTypeFailed,
};

type OrderStatusType =
  | typeof OrderStatusTypePaid
  | typeof OrderStatusTypePending
  | typeof OrderStatusTypeCanceled
  | typeof OrderStatusTypeFailed;

export default OrderStatusType;
