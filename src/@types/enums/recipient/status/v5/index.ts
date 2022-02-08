const RecipientStatusTypeRegistration = 'registration';
const RecipientStatusTypeAffiliation = 'affiliation';
const RecipientStatusTypeActive = 'active';
const RecipientStatusTypeRefused = 'refused';
const RecipientStatusTypeSuspended = 'suspended';
const RecipientStatusTypeBlocked = 'blocked';
const RecipientStatusTypeInactive = 'inactive';

export const RecipientStatusTypeEnums = {
  registration: RecipientStatusTypeRegistration as typeof RecipientStatusTypeRegistration,
  affiliation: RecipientStatusTypeAffiliation as typeof RecipientStatusTypeAffiliation,
  active: RecipientStatusTypeActive as typeof RecipientStatusTypeActive,
  refused: RecipientStatusTypeRefused as typeof RecipientStatusTypeRefused,
  suspended: RecipientStatusTypeSuspended as typeof RecipientStatusTypeSuspended,
  blocked: RecipientStatusTypeBlocked as typeof RecipientStatusTypeBlocked,
  inactive: RecipientStatusTypeInactive as typeof RecipientStatusTypeInactive,
};

type RecipientStatusType =
  | typeof RecipientStatusTypeRegistration
  | typeof RecipientStatusTypeAffiliation
  | typeof RecipientStatusTypeActive
  | typeof RecipientStatusTypeRefused
  | typeof RecipientStatusTypeSuspended
  | typeof RecipientStatusTypeBlocked
  | typeof RecipientStatusTypeInactive;

export default RecipientStatusType;
