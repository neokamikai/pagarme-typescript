const CardBrandTypeAmex = 'amex';
const CardBrandTypeAura = 'aura';
const CardBrandTypeDiscover = 'discover';
const CardBrandTypeElo = 'elo';
const CardBrandTypeHipercard = 'hipercard';
const CardBrandTypeJcb = 'jcb';
const CardBrandTypeVisa = 'visa';
const CardBrandTypeMastercard = 'mastercard';

type CardBrandType = typeof CardBrandTypeAmex
| typeof CardBrandTypeAura
| typeof CardBrandTypeDiscover
| typeof CardBrandTypeElo
| typeof CardBrandTypeHipercard
| typeof CardBrandTypeJcb
| typeof CardBrandTypeVisa
| typeof CardBrandTypeMastercard;

export const CardBrandTypeEnums = {
  CardBrandTypeAmex:
    CardBrandTypeAmex as typeof CardBrandTypeAmex,
  CardBrandTypeAura:
    CardBrandTypeAura as typeof CardBrandTypeAura,
  CardBrandTypeDiscover:
    CardBrandTypeDiscover as typeof CardBrandTypeDiscover,
  CardBrandTypeElo:
    CardBrandTypeElo as typeof CardBrandTypeElo,
  CardBrandTypeHipercard:
    CardBrandTypeHipercard as typeof CardBrandTypeHipercard,
  CardBrandTypeJcb:
    CardBrandTypeJcb as typeof CardBrandTypeJcb,
  CardBrandTypeVisa:
    CardBrandTypeVisa as typeof CardBrandTypeVisa,
  CardBrandTypeMastercard:
    CardBrandTypeMastercard as typeof CardBrandTypeMastercard,
};

export default CardBrandType;
