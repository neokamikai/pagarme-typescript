import AutomaticAnticipationType from 'src/@types/enums/automatic-anticipation-type';

export default interface IAutomaticAnticipationSettingsV5 {
  enabled: boolean
  type: AutomaticAnticipationType
  volume_percentage: number
  delay: number
}
