import cardType from 'credit-card-type';
import CardBrandType, { CardBrandTypeV5Enums } from 'src/@types/enums/card-brand/v5';

const supportedV5Cards = Object.values(CardBrandTypeV5Enums)
  .map((cardBrand) => `${cardBrand}`.toLowerCase());

const detectCardBrandV5 = (cardNumber: string) => {
  const foundTypes = cardType(cardNumber);
  const foundType = foundTypes.find((cardBrand) => supportedV5Cards.includes(cardBrand.type));
  return (foundType as any) as CardBrandType;
};
export default detectCardBrandV5;
