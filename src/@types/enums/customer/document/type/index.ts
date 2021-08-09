const CustomerDocumentTypeIndividual = 'cpf';
const CustomerDocumentTypeCorporation = 'cnpj';
const CustomerDocumentTypePassport = 'passport';
const CustomerDocumentTypeOther = 'other';

type CustomerDocumentType = typeof CustomerDocumentTypeIndividual
| typeof CustomerDocumentTypeCorporation
| typeof CustomerDocumentTypePassport
| typeof CustomerDocumentTypeOther;

export const CustomerDocumentTypeEnums = {
  CustomerDocumentTypeIndividual:
    CustomerDocumentTypeIndividual as typeof CustomerDocumentTypeIndividual,
  CustomerDocumentTypeCorporation:
    CustomerDocumentTypeCorporation as typeof CustomerDocumentTypeCorporation,
  CustomerDocumentTypePassport:
    CustomerDocumentTypePassport as typeof CustomerDocumentTypePassport,
  CustomerDocumentTypeOther:
    CustomerDocumentTypeOther as typeof CustomerDocumentTypeOther,
};

export default CustomerDocumentType;
