// TODO: implement proper parameters and response interfaces for ISettlementsNamespaceMethods
export default interface ISettlementsNamespaceMethods {
  getList: () => Promise<any>
  getListForRecipient: (recipientId: string) => Promise<any>
  getDetail: () => Promise<any>
}
