import faker from 'faker';

const fakeZipCode = () => faker.datatype
  .number({ min: 1, max: 99999999 }).toString().padStart(8, '0');

export default fakeZipCode;
