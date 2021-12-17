import CustomerGender from 'src/@types/enums/customer/v5/gender';
import CustomerType from 'src/@types/enums/customer/v5/type';
import IAddress from '../../address/v5';
import IPhones from '../../phones';

export default interface ICustomerObjectV5 {
  /**
   * Nome do cliente. Max: 64 caracteres.
   */
  name: string
  /**
   * E-mail do cliente. Max: 64 caracteres.
   */
  email?: string
  /**
   * Código de referência do cliente no sistema da loja. Max: 52 caracteres.
   */
  code?: string
  /**
   * CPF, CNPJ ou PASSAPORTE do cliente.
   * Max: 16 caracteres para CPF e CNPJ
   * Max: 50 caracteres para PASSAPORTE.
   */
  document?: string
  /**
   * Tipo de documento. Valores possíveis: CPF, CNPJ ou PASSPORT.
   */
  document_type?: string
  /**
   * Tipo de cliente.
   *
   * Valores possíveis: individual (pessoa física) ou company (pessoa jurídica).
   * Obrigatório, caso o document seja enviado.
   */
  type?: CustomerType
  /**
   * Sexo do cliente . Valores possíveis: male ou female.
   */
  gender?: CustomerGender
  /**
   * Endereço do cliente.
   */
  address?: IAddress
  /**
   * Telefone residencial do cliente.
   */
  phones?: IPhones
  /**
   * Data de nascimento do cliente.
   */
  birthdate?: Date | string
  /**
   * Objeto chave/valor utilizado para armazenar informações adicionais sobre o cliente.
   */
  metadata: { [id: string]: string }
}
