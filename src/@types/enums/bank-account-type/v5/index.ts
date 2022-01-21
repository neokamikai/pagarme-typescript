export const BankAccountTypeV5Checking = 'checking';
export const BankAccountTypeV5Savings = 'savings';

type BankAccountTypeV5 = typeof BankAccountTypeV5Checking
  | typeof BankAccountTypeV5Savings;

export const BankAccountTypeEnums = {
  BankAccountTypeV5Checking: BankAccountTypeV5Checking as typeof BankAccountTypeV5Checking,
  BankAccountTypeV5Savings: BankAccountTypeV5Savings as typeof BankAccountTypeV5Savings,
};

export default BankAccountTypeV5;
