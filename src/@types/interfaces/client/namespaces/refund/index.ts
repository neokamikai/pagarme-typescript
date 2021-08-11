import IRefundsGetParameters from '../../parameters/refund';
// TODO: implement proper parameters and response interfaces for IRefundNamespaceMethods
export default interface IRefundNamespaceMethods {
  getList: (params: IRefundsGetParameters) => Promise<any>
  cancel: (refundId: string) => Promise<any>
}
