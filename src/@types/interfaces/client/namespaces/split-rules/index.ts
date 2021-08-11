// TODO: implement proper parameters and response interfaces for ISplitRulesNamespaceMethods
export default interface ISplitRulesNamespaceMethods {
  getList: () => Promise<any>
  getDetail: (id: string) => Promise<any>
}
