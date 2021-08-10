const BulkAnticipationTimeframeStart = 'start';
const BulkAnticipationTimeframeEnd = 'end';

export const BulkAnticipationTimeframeEnums = {
  BulkAnticipationTimeframeStart:
    BulkAnticipationTimeframeStart as typeof BulkAnticipationTimeframeStart,
  BulkAnticipationTimeframeEnd:
    BulkAnticipationTimeframeEnd as typeof BulkAnticipationTimeframeEnd,
};

type BulkAnticipationTimeframe = typeof BulkAnticipationTimeframeStart
  | typeof BulkAnticipationTimeframeEnd;

export default BulkAnticipationTimeframe;
