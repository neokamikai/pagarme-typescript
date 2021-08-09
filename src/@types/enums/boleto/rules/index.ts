/**
 * restringe o pagamento para até a data de vencimento e apenas o valor exato do documento
 */
const BoletoRuleStrictExpirationDate = 'strict_expiration_date';
const BoletoRuleNoStrict = 'no_strict';

type BoletoRule = typeof BoletoRuleStrictExpirationDate | typeof BoletoRuleNoStrict;

export const BoletoRuleEnums = {
  BoletoRuleNoStrict:
    BoletoRuleNoStrict as typeof BoletoRuleNoStrict,
  BoletoRuleStrictExpirationDate:
    BoletoRuleStrictExpirationDate as typeof BoletoRuleStrictExpirationDate,
};

export default BoletoRule;
