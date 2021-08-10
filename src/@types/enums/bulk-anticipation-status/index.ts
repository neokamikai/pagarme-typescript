const BulkAnticipationStatusBuilding = 'building';
const BulkAnticipationStatusPending = 'pending';
const BulkAnticipationStatusApproved = 'approved';
const BulkAnticipationStatusRefused = 'refused';
const BulkAnticipationStatusCanceled = 'canceled';

export const BulkAnticipationStatusEnums = {
  BulkAnticipationStatusBuilding:
    BulkAnticipationStatusBuilding as typeof BulkAnticipationStatusBuilding,
  BulkAnticipationStatusPending:
    BulkAnticipationStatusPending as typeof BulkAnticipationStatusPending,
  BulkAnticipationStatusApproved:
    BulkAnticipationStatusApproved as typeof BulkAnticipationStatusApproved,
  BulkAnticipationStatusRefused:
    BulkAnticipationStatusRefused as typeof BulkAnticipationStatusRefused,
  BulkAnticipationStatusCanceled:
    BulkAnticipationStatusCanceled as typeof BulkAnticipationStatusCanceled,
};

type BulkAnticipationStatus = typeof BulkAnticipationStatusBuilding
  | typeof BulkAnticipationStatusPending
  | typeof BulkAnticipationStatusApproved
  | typeof BulkAnticipationStatusRefused
  | typeof BulkAnticipationStatusCanceled;

export default BulkAnticipationStatus;
