export default interface ICompanyAnticipationConfig {
  max_anticipation_days: number
  minimum_delay: number
  config_default_recipient: boolean
  config_anticipation_params: boolean
  spread_fee_base: {
    fixed: number
  },
  spread_rate: number
}
