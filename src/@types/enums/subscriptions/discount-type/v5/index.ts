const DiscountTypeFlat = 'flat';
const DiscountTypePercentage = 'percentage';

export const DiscountTypeEnums = {
  DiscountTypeFlat: DiscountTypeFlat as typeof DiscountTypeFlat,
  DiscountTypePercentage: DiscountTypePercentage as typeof DiscountTypePercentage,
};

type DiscountType =
  | typeof DiscountTypeFlat
  | typeof DiscountTypePercentage;

export default DiscountType;
