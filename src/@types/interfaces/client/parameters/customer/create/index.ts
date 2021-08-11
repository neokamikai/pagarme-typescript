import CustomerType from 'src/@types/enums/customer/type';
import CustomerDocument from '../../../common/customer/document';

export default interface ICustomerCreateParameters {
  /**
   * Nome ou razão social do comprador
   */
  name: string
  /**
   * E-mail do comprador
   */
  email: string
  /**
   * Identificador do cliente na loja
   */
  external_id: string
  /**
   * Tipo de documento.
   * Deve ser 'individual' para pessoa física ou 'corporation' para pessoa jurídica
   */
  type: CustomerType
  /**
   * País
   */
  country: string
  /**
   * Data de nascimento
   * @format YYYY-MM-DD
   */
  birthday?: string
  /**
   * Números de telefone. Requer ao menos um valor. Deve seguir o padrão E.164
   */
  phone_numbers: Array<string>
  /**
   * Documento. Contém campos 'type' para tipo de documento e 'number' para número do documento.
   */
  documents: Array<CustomerDocument>
}
