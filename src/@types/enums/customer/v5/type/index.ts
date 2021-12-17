export const CustomerTypeIndividual = 'individual';
export const CustomerTypeCompany = 'company';

export const CustomerTypeEnums = {
  CustomerTypeIndividual,
  CustomerTypeCompany,
};

type CustomerType = typeof CustomerTypeIndividual | typeof CustomerTypeCompany;

export default CustomerType;
