import faker from 'faker';
import IPhoneNumber from 'src/@types/interfaces/client/parameters/common/phone-number';
import fakePhoneNumber from '../fake-phone-number';

const fakeRecipientPhone = (): IPhoneNumber => {
  const ddd = faker.datatype.number({ min: 10, max: 99 }).toString();
  const number = `${fakePhoneNumber()}`;
  const { log } = console;
  log('fakeRecipientPhone.number:', number);
  return {
    ddd, number, type: 'mobile',
  };
};

export default fakeRecipientPhone;
