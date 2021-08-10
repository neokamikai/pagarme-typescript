import { BulkAnticipationStatusEnums } from 'src/@types/enums/bulk-anticipation-status';
import IBulkAnticipationObject from 'src/@types/interfaces/api/common/bulk-anticipation';

export default interface IBulkAnticipationsCancelResponse extends IBulkAnticipationObject {
  status: typeof BulkAnticipationStatusEnums.BulkAnticipationStatusCanceled
}
