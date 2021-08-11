import IAddress from '../address';

export default interface IBilling {
  /**
   * Obrigatório. Nome da entidade de cobrança.
   * Nome da pessoa ou empresa responsável pelo pagamento da transação
   */
  name: string
  /**
   * Obrigatório. Dados de endereço de cobrança.
   */
  address: IAddress
}
