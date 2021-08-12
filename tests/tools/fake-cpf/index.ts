import faker from 'faker';

const fakeCpf = () => {
  const cpfBase = [faker.datatype.number({ min: 0, max: 999 }).toString().padStart(3, '0'),
    faker.datatype.number({ min: 0, max: 999 }).toString().padStart(3, '0'),
    faker.datatype.number({ min: 0, max: 999 }).toString().padStart(3, '0')].join('');
  const generateDV = () => {
    const m1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const m2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
    const numeros = cpfBase.split('');
    let resto = (
      (m1[0] * parseInt(numeros[0], 10))
    + (m1[1] * parseInt(numeros[1], 10))
    + (m1[2] * parseInt(numeros[2], 10))
    + (m1[3] * parseInt(numeros[3], 10))
    + (m1[4] * parseInt(numeros[4], 10))
    + (m1[5] * parseInt(numeros[5], 10))
    + (m1[6] * parseInt(numeros[6], 10))
    + (m1[7] * parseInt(numeros[7], 10))
    + (m1[8] * parseInt(numeros[8], 10))) % 11;
    let dv;
    if (resto < 2) {
      dv = '0';
    } else { dv = (11 - resto).toString(); }
    numeros.push(dv);
    resto = (
      (m2[0] * parseInt(numeros[0], 10))
    + (m2[1] * parseInt(numeros[1], 10))
    + (m2[2] * parseInt(numeros[2], 10))
    + (m2[3] * parseInt(numeros[3], 10))
    + (m2[4] * parseInt(numeros[4], 10))
    + (m2[5] * parseInt(numeros[5], 10))
    + (m2[6] * parseInt(numeros[6], 10))
    + (m2[7] * parseInt(numeros[7], 10))
    + (m2[8] * parseInt(numeros[8], 10))
    + (m2[9] * parseInt(numeros[9], 10))) % 11;
    if (resto < 2) { dv += '0'; } else { dv += (11 - resto).toString(); }
    return dv;
  };
  return `${cpfBase}${generateDV()}`;
};
export default fakeCpf;
