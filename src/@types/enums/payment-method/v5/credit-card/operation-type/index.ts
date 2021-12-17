const CreditCardOperationTypeAuthAndCapture = 'auth_and_capture';
const CreditCardOperationTypeAuthOnly = 'auth_only';
const CreditCardOperationTypePreAuth = 'pre_auth';

export const CreditCardOperationTypeEnums = {
  CreditCardOperationTypeAuthAndCapture:
    CreditCardOperationTypeAuthAndCapture as typeof CreditCardOperationTypeAuthAndCapture,
  CreditCardOperationTypeAuthOnly:
    CreditCardOperationTypeAuthOnly as typeof CreditCardOperationTypeAuthOnly,
  CreditCardOperationTypePreAuth:
    CreditCardOperationTypePreAuth as typeof CreditCardOperationTypePreAuth,
};
type CreditCardOperationType =
  typeof CreditCardOperationTypeAuthAndCapture |
  typeof CreditCardOperationTypeAuthOnly |
  typeof CreditCardOperationTypePreAuth;

export default CreditCardOperationType;
