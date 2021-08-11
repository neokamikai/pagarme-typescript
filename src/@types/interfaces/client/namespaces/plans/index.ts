// TODO: implement proper parameters and response interfaces for IPlansNamespaceMethods
export default interface IPlansNamespaceMethods {
  create: () => Promise<any>
  update: (id: string) => Promise<any>
  getList: () => Promise<any>
  getDetail: (id: string) => Promise<any>
}
