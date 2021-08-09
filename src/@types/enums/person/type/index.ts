const PersonTypeIndividual = 'individual';
const PersonTypeCorporation = 'corporation';

type PersonType = typeof PersonTypeIndividual
| typeof PersonTypeCorporation;

export const PersonTypeEnums = {
  PersonTypeIndividual: PersonTypeIndividual as typeof PersonTypeIndividual,
  PersonTypeCorporation: PersonTypeCorporation as typeof PersonTypeCorporation,
};

export default PersonType;
