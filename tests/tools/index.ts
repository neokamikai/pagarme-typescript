import fakerStatic from 'faker';
import fakeBankAccount from './fake-bank-account';
import fakeCnpj from './fake-cnpj';
import fakeCpf from './fake-cpf';
import fakePhoneNumber from './fake-phone-number';
import fakeRecipientPhone from './fake-recipient-phone';
import fakeZipCode from './fake-zip-code';

export const faker = {
  ...fakerStatic,
  appDomain: {
    bankAccount: fakeBankAccount,
    cpf: fakeCpf,
    cnpj: fakeCnpj,
    phoneNumber: fakePhoneNumber,
    zipcode: fakeZipCode,
    recipientPhone: fakeRecipientPhone,
  },
};

export default { faker };
