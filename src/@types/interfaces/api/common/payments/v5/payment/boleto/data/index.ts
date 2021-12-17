export default interface IBoletoPaymentBoleto {
  /**
   * Código do banco.
   * 001 (Banco do Brasil);
   * 033 (Santander);
   * 237 (Bradesco);
   * 341 (Itau);
   * 745 (Citibank);
   * 104 (Caixa Econômica Federal).
   */
  bank: string
  /**
   * Instruções do boleto. Max: 256 caracteres.
   */
  instructions: string
  /**
   * Data de vencimento. (Opcional)
   */
  due_at?: string
  /**
   * Número que identifica unicamente um boleto para uma conta.
   */
  nosso_numero: string
  /**
   * Tipo de espécie do boleto.DM (Duplicata Mercantil) e BDP (Boleto de proposta)
   */
  type: string
  /**
   * Identificador do boleto. Max: 16 caracteres.
   */
  document_number: string
}
