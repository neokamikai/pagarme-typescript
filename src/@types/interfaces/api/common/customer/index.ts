import CustomerDocumentType from 'src/@types/enums/customer/document/type';
import PersonType from 'src/@types/enums/person/type';
import IPhoneNumber from 'src/@types/interfaces/client/common/phone-number';
import IAddress from '../address';
import ICustomerDocumentObject from './document';

export default interface ICustomerObject {
  /**
   * Identificador do tipo de objeto 'customer'
   */
  object: 'customer'
  /**
   * Identificador do customer no sistema da Pagar.me
   */
  id: number
  /**
   * Obrigatório. Identificador do cliente na loja
   */
  external_id: string
  /**
   * Obrigatório. Tipo de documento.
   *
   * Deve ser individual para pessoa física ou corporation para pessoa jurídica
   */
  type: PersonType
  /**
   * Obrigatório. País. Duas letras minúsculas, seguindo o padrão ISO 3166-1 alpha-2
   */
  country: string
  /**
   * Não utilizado
   */
  document_number: string
  /**
   * Não utilizado
   */
  document_type: CustomerDocumentType
  /**
   * Obrigatório. Nome ou razão social do comprador
   */
  name: string
  /**
   * Obrigatório. E-mail do comprador
   */
  email: string
  /**
   * Obrigatório. Telefone. Requer ao menos um valor. Deve seguir o padrão E.164
   */
  phone_numbers: Array<string>,
  /**
   * Não utilizado
   */
  born_at: null,
  /**
   * Data de nascimento.
   *
   * Deve seguir o formato AAAA-MM-DD.
   *
   * Por exemplo, para 20/12/1990 birthday seria 1990-12-20
   */
  birthday: string
  /**
   * Não utilizado
   */
  gender: null,
  /**
   * Data/hora de criação do customer no sistema da Pagar.me
   */
  date_created: string
  /**
   * Documento. Contém campos type para tipo de documento e number para número do documento.
   */
  documents: Array<ICustomerDocumentObject>
  /**
   * Não utilizado
   */
  addresses?: Array<IAddress>
  /**
   * Não utilizado
   */
  phones?: Array<IPhoneNumber>
}
