import SplitType from 'src/@types/enums/split-type/v5';
import ISplitOptions from './options';

export default interface ISplit {
  /**
   * Valor destinado ao recebedor.
   */
  amount: string
  /**
   * Código do recebedor. Formato: rp_XXXXXXXXXXXXXXXX.
   */
  recipient_id: string
  /**
   * Tipo de divisão. Os valores possíveis são flat ou percentage.
   */
  type: SplitType
  /**
   * Informações da responsabilidade do recebedor na transação.
   */
  options: ISplitOptions
}
