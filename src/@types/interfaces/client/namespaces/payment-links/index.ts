// TODO: implement proper parameters and response interfaces for IPaymentLinksNamespaceMethods
export default interface IPaymentLinksNamespaceMethods {
  create: (params: any) => Promise<any>
  cancel: (id: string) => Promise<any>
  getList: (params: any) => Promise<any>
  getDetail: (id: string) => Promise<any>
  order: (params: any) => Promise<any>
}
