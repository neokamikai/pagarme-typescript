/*
Elo, Mastercard, Visa, Amex, JCB, Aura, Hipercard, Diners ou Discover
*/
const CardBrandTypeV5Amex = 'Amex';
const CardBrandTypeV5Aura = 'Aura';
const CardBrandTypeV5Discover = 'Discover';
const CardBrandTypeV5Elo = 'Elo';
const CardBrandTypeV5Hipercard = 'Hipercard';
const CardBrandTypeV5Jcb = 'JCB';
const CardBrandTypeV5Visa = 'Visa';
const CardBrandTypeV5Mastercard = 'Mastercard';

type CardBrandTypeV5 = typeof CardBrandTypeV5Amex
  | typeof CardBrandTypeV5Aura
  | typeof CardBrandTypeV5Discover
  | typeof CardBrandTypeV5Elo
  | typeof CardBrandTypeV5Hipercard
  | typeof CardBrandTypeV5Jcb
  | typeof CardBrandTypeV5Visa
  | typeof CardBrandTypeV5Mastercard;

export const CardBrandTypeV5Enums = {
  CardBrandTypeV5Amex:
    CardBrandTypeV5Amex as typeof CardBrandTypeV5Amex,
  CardBrandTypeV5Aura:
    CardBrandTypeV5Aura as typeof CardBrandTypeV5Aura,
  CardBrandTypeV5Discover:
    CardBrandTypeV5Discover as typeof CardBrandTypeV5Discover,
  CardBrandTypeV5Elo:
    CardBrandTypeV5Elo as typeof CardBrandTypeV5Elo,
  CardBrandTypeV5Hipercard:
    CardBrandTypeV5Hipercard as typeof CardBrandTypeV5Hipercard,
  CardBrandTypeV5Jcb:
    CardBrandTypeV5Jcb as typeof CardBrandTypeV5Jcb,
  CardBrandTypeV5Visa:
    CardBrandTypeV5Visa as typeof CardBrandTypeV5Visa,
  CardBrandTypeV5Mastercard:
    CardBrandTypeV5Mastercard as typeof CardBrandTypeV5Mastercard,
};

export default CardBrandTypeV5;
