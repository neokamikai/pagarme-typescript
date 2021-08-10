import BulkAnticipationTimeframe from 'src/@types/enums/bulk-anticipation-timeframe';

export default interface IBulkAnticipationsCreateParameters {
  /**
   * Data que você deseja receber a antecipação em sua conta Pagar.me
   *
   * É importante notar que o campo payment_date utiliza unixTimeStamp como valor.
   *
   * Para gerar o unixTimeStamp de uma data, é possível utilizar o console do Google
   * Chrome com o seguinte código em Javascript :
   * new Date("2017-12-25T02:00:00.000Z").getTime() que retornará 1514167200000
   */
  payment_date: number
  /**
   * Define o período de onde os recebíveis serão escolhidos.
   * > 'start' define recebíveis próximos, perto de serem pagos
   * > 'end' define recebíveis longes, no final de todos recebíveis que você possui para receber
   */
  timeframe: BulkAnticipationTimeframe
  /**
   * Valor líquido, em centavos, que você deseja receber de antecipação
   */
  requested_amount: number
  /**
   * Define se a antecipação deve retornar status building com build=true,
   * isso para possíveis ajustes no valor da antecipação, data de pagamento
   * ou timeframe. Para build=false, a antecipação já vai diretamente para
   * a aprovação do Pagar.me. OBS: Caso deseje alterar a antecipação antes de
   * confirmar, você tem 5 minutos antes que a antecipação building seja destruída automaticamente.
   */
  build: boolean
  /**
   * Define se o valor da antecipação será transferido automaticamente para a
   * conta bancária do recebedor
   */
  automatic_transfer: boolean
}
