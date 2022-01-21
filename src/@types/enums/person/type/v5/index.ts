export const PersonTypeIndividual = 'individual';
export const PersonTypeCompany = 'company';

export const PersonTypeEnums = {
  PersonTypeIndividual,
  PersonTypeCompany,
};

type PersonTypeV5 = typeof PersonTypeIndividual | typeof PersonTypeCompany;

export default PersonTypeV5;
