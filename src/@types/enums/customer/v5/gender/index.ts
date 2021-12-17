export const CustomerGenderMale = 'male';
export const CustomerGenderFemale = 'female';

export const CustomerGenderEnums = {
  CustomerGenderMale,
  CustomerGenderFemale,
};

type CustomerGender = typeof CustomerGenderMale | typeof CustomerGenderFemale;

export default CustomerGender;
