import IGetRefundsParameters from '../../parameters/refund';
// TODO: implement proper parameters and response interfaces for IRefundNamespaceMethods
export default interface IRefundNamespaceMethods {
  getList: (params: IGetRefundsParameters) => Promise<any>
  cancel: (refundId: string) => Promise<any>
}
