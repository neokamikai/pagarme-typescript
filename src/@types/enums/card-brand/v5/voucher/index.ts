/*
VR, Sodexo ou Alelo
*/
const VoucherCardBrandTypeV5VR = 'VR';
const VoucherCardBrandTypeV5Sodexo = 'Sodexo';
const VoucherCardBrandTypeV5Alelo = 'Alelo';

type VoucherCardBrandTypeV5 = typeof VoucherCardBrandTypeV5VR
  | typeof VoucherCardBrandTypeV5Sodexo
  | typeof VoucherCardBrandTypeV5Alelo;

export const VoucherCardBrandTypeV5Enums = {
  VoucherCardBrandTypeV5VR:
    VoucherCardBrandTypeV5VR as typeof VoucherCardBrandTypeV5VR,
  VoucherCardBrandTypeV5Sodexo:
    VoucherCardBrandTypeV5Sodexo as typeof VoucherCardBrandTypeV5Sodexo,
  VoucherCardBrandTypeV5Alelo:
    VoucherCardBrandTypeV5Alelo as typeof VoucherCardBrandTypeV5Alelo,
};

export default VoucherCardBrandTypeV5;
