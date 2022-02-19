const IncrementTypeFlat = 'flat';
const IncrementTypePercentage = 'percentage';

export const IncrementTypeEnums = {
  IncrementTypeFlat: IncrementTypeFlat as typeof IncrementTypeFlat,
  IncrementTypePercentage: IncrementTypePercentage as typeof IncrementTypePercentage,
};

type IncrementType =
  | typeof IncrementTypeFlat
  | typeof IncrementTypePercentage;

export default IncrementType;
