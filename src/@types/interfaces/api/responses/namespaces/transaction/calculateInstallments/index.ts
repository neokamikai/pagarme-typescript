import ICalculatedInstallmentDetail from './installment';

export default interface ITransactionCalculateInstallmentsResponse {
  installments: { [installmentNumber: number]: ICalculatedInstallmentDetail }
}
