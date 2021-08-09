const StatusReasonAcquirer = 'acquirer';
const StatusReasonAntifraud = 'antifraud';
const StatusReasonInternalError = 'internal_error';
const StatusReasonNoAcquirer = 'no_acquirer';
const StatusReasonAcquirerTimeout = 'acquirer_timeout';

export const StatusReasonEnums = {
  StatusReasonAcquirer:
  StatusReasonAcquirer as typeof StatusReasonAcquirer,
  StatusReasonAntifraud:
  StatusReasonAntifraud as typeof StatusReasonAntifraud,
  StatusReasonInternalError:
  StatusReasonInternalError as typeof StatusReasonInternalError,
  StatusReasonNoAcquirer:
  StatusReasonNoAcquirer as typeof StatusReasonNoAcquirer,
  StatusReasonAcquirerTimeout:
  StatusReasonAcquirerTimeout as typeof StatusReasonAcquirerTimeout,
};

type StatusReason = typeof StatusReasonAcquirer
| typeof StatusReasonAntifraud
| typeof StatusReasonInternalError
| typeof StatusReasonNoAcquirer
| typeof StatusReasonAcquirerTimeout;

export default StatusReason;
