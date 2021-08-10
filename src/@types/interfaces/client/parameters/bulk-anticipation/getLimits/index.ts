import BulkAnticipationTimeframe from 'src/@types/enums/bulk-anticipation-timeframe';

export default interface IBulkAnticipationsGetLimitsParameters {
  /**
   * Define o período de onde os recebíveis serão escolhidos.
   *
   * > 'start' define recebíveis próximos, perto de serem pagos
   * > 'end' define recebíveis longes, no final de todos recebíveis que você possui para receber
   */
  timeframe: BulkAnticipationTimeframe
  /**
   * Data de pagamento deseja para a antecipação, ou seja,
   * data em que você deseja que o dinheiro esteja em sua conta Pagar.me
   * disponível para saque
   *
   * É importante notar que o campo payment_date utiliza unixTimeStamp como valor.
   *
   * Para gerar o unixTimeStamp de uma data, é possível utilizar o console do Google
   * Chrome com o seguinte código em Javascript :
   * new Date("2017-12-25T02:00:00.000Z").getTime() que retornará 1514167200000
   */
  payment_date: number
}
