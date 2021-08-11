import CustomerDocumentType from 'src/@types/enums/customer/document/type';

export default interface ICustomerDocumentObject {
  object: 'document',
  id: string
  type: CustomerDocumentType
  number: string
}
