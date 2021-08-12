import faker from 'faker';
import IBankAccountCreateParameters from 'src/@types/interfaces/client/parameters/bank-account/create';
import fakeCnpj from '../fake-cnpj';
import fakeCpf from '../fake-cpf';

const fakeBankAccount = (): IBankAccountCreateParameters => ({
  agencia: faker.datatype.number(9999).toString().padStart(4, '0'),
  agencia_dv: faker.datatype.number(9).toString(),
  bank_code: faker.datatype.number(999).toString().padStart(3, '0'),
  conta: faker.datatype.number(99999).toString().padStart(5, '0'),
  conta_dv: faker.datatype.number(9).toString(),
  document_number: [fakeCnpj, fakeCpf][faker.datatype.number({ min: 0, max: 1 })](),
  legal_name: faker.name.firstName(),
});
export default fakeBankAccount;
