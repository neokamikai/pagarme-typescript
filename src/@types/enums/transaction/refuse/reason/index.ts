const RefuseReasonAcquirer = 'acquirer';
const RefuseReasonAntifraud = 'antifraud';
const RefuseReasonInternalError = 'internal_error';
const RefuseReasonNoAcquirer = 'no_acquirer';
const RefuseReasonAcquirerTimeout = 'acquirer_timeout';

export const RefuseReasonEnums = {
  RefuseReasonAcquirer: RefuseReasonAcquirer as typeof RefuseReasonAcquirer,
  RefuseReasonAntifraud: RefuseReasonAntifraud as typeof RefuseReasonAntifraud,
  RefuseReasonInternalError: RefuseReasonInternalError as typeof RefuseReasonInternalError,
  RefuseReasonNoAcquirer: RefuseReasonNoAcquirer as typeof RefuseReasonNoAcquirer,
  RefuseReasonAcquirerTimeout: RefuseReasonAcquirerTimeout as typeof RefuseReasonAcquirerTimeout,
};

type RefuseReason = typeof RefuseReasonAcquirer
| typeof RefuseReasonAntifraud
| typeof RefuseReasonInternalError
| typeof RefuseReasonNoAcquirer
| typeof RefuseReasonAcquirerTimeout;

export default RefuseReason;
