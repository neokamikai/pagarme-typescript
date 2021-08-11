// TODO: implement proper parameters and response interfaces for ISecurityRulesNamespaceMethods
export default interface ISecurityRulesNamespaceMethods {
  create: () => Promise<any>
  delete: (id: string) => Promise<any>
  getList: () => Promise<any>
}
