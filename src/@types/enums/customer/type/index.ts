export const CustomerTypeIndividual = 'individual';
export const CustomerTypeCorporation = 'corporation';

export const CustomerTypeEnums = {
  CustomerTypeIndividual,
  CustomerTypeCorporation,
};

type CustomerType = typeof CustomerTypeIndividual | typeof CustomerTypeCorporation;

export default CustomerType;
