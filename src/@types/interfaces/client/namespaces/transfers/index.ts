// TODO: implement proper parameters and response interfaces for ITransfersNamespaceMethods
export default interface ITransfersNamespaceMethods {
  create: () => Promise<any>
  cancel: (id: string) => Promise<any>
  getList: () => Promise<any>
  getDetail: (id: string) => Promise<any>
}
