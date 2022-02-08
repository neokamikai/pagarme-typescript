import PersonTypeV5 from 'src/@types/enums/person/type/v5';
import RecipientStatusType from 'src/@types/enums/recipient/status/v5';

export default interface IUpdateReceiverPayload {
  /**
   * Nome do recebedor. Max:128 caracteres
   */
  name: string
  /**
   * E-mail do recebedor. Max: 64 caracteres
   */
  email: string
  /**
   * Descrição do recebedor. Max:256 caracteres
   */
  description: string
  /**
   * Tipo de recebedor. Valores possíveis: individual (pessoa física) ou company (pessoa jurídica)
   */
  type: PersonTypeV5
  /**
   * Status do recebedor .
   * Valores possíveis: registration, affiliation, active, refused, suspended, blocked, inactive
   */
  status: RecipientStatusType

  /**
   * Objeto chave/valor utilizado para armazenar informações adicionais sobre o recebedor.
   */
  metadata: { [id: string]: string }
}
