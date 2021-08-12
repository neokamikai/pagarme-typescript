import faker from 'faker';

const fakePhoneNumber = () => `${faker.datatype
  .number({ min: 900000000, max: 999999999 })}`;

export default fakePhoneNumber;
