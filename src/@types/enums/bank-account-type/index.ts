export const BankAccountTypeContaCorrente = 'conta_corrente';
export const BankAccountTypeContaPoupanca = 'conta_poupanca';
export const BankAccountTypeContaCorrenteConjunta = 'conta_corrente_conjunta';
export const BankAccountTypeContaPoupancaConjunta = 'conta_poupanca_conjunta';

type BankAccountType = typeof BankAccountTypeContaCorrente
| typeof BankAccountTypeContaPoupanca
| typeof BankAccountTypeContaCorrenteConjunta
  | typeof BankAccountTypeContaPoupancaConjunta;

export const BankAccountTypeEnums = {
  BankAccountTypeContaCorrente:
    BankAccountTypeContaCorrente as typeof BankAccountTypeContaCorrente,
  BankAccountTypeContaPoupanca:
    BankAccountTypeContaPoupanca as typeof BankAccountTypeContaPoupanca,
  BankAccountTypeContaCorrenteConjunta:
    BankAccountTypeContaCorrenteConjunta as typeof BankAccountTypeContaCorrenteConjunta,
  BankAccountTypeContaPoupancaConjunta:
    BankAccountTypeContaPoupancaConjunta as typeof BankAccountTypeContaPoupancaConjunta,
};

export default BankAccountType;
