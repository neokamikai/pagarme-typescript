const SplitTypeFlat = 'flat';
const SplitTypePercentage = 'percentage';

export const SplitTypeEnums = {
  SplitTypeFlat: SplitTypeFlat as typeof SplitTypeFlat,
  SplitTypePercentage: SplitTypePercentage as typeof SplitTypePercentage,
};

type SplitType =
  | typeof SplitTypeFlat
  | typeof SplitTypePercentage;

export default SplitType;
