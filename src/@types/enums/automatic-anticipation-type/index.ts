const AnticipationTypeFull = 'full';
const AnticipationType1025 = '1025';

const AnticipationTypeEnums = {
  AnticipationTypeFull: AnticipationTypeFull as typeof AnticipationTypeFull,
  AnticipationType1025: AnticipationType1025 as typeof AnticipationType1025,
};

export {
  AnticipationTypeFull,
  AnticipationType1025,
  AnticipationTypeEnums,
};
type AutomaticAnticipationType = typeof AnticipationTypeFull | typeof AnticipationType1025;

export default AutomaticAnticipationType;
