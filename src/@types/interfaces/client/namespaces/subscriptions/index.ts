// TODO: implement proper parameters and response interfaces for ISubscriptionsNamespaceMethods
export default interface ISubscriptionsNamespaceMethods {
  create: () => Promise<any>
  update: (id: string) => Promise<any>
  cancel: (id: string) => Promise<any>
  getDetail: (id: string) => Promise<any>
  getList: () => Promise<any>
  getTransactions: () => Promise<any>
  skipCharge: () => Promise<any>
}
