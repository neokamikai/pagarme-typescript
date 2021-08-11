// TODO: implement proper parameters and response interfaces for IPostbackNamespaceMethods
export default interface IPostbackNamespaceMethods {
  redeliver: () => Promise<any>
  getList: () => Promise<any>
  getDetail: (id: string) => Promise<any>
}
