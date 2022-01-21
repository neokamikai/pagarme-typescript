import AutomaticAnticipationType from 'src/@types/enums/automatic-anticipation-type';

export default interface IAutomaticAnticipationSettingsV5Input {
  /**
   * Indica se o recebedor receberá antecipações automaticamente
   */
  enabled: boolean
  /**
   * Indica o tipo de antecipação automática que será
   * configurado para a conta do recebedor. Valores possíveis "full" e "1025"
   */
  type: AutomaticAnticipationType
  /**
   * Indica a porcentagem do volume passível de ser antecipado para o recebedor.
   */
  volume_percentage: string
  /**
   * Indica a quantidade de dias que serão desconsiderados na
   * contabilização do valor passível de ser antecipado.
   * A contagem de dias é realizada a partir do dia da antecipação para trás
   */
  delay: string | null
}
