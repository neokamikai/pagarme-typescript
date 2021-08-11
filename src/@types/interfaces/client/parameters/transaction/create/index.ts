import ITransactionBase from './base';
import ITransactionBoletoParameters from './boleto-parameters';
import ITransactionCardParameters, { IWithCardHash, IWithCardId, IWithDataForNewCard } from './card-parameters';

export type ICardTransactionCreateParameters<TMetadata extends Object> =
  ITransactionBase<TMetadata> & ITransactionCardParameters;
export type IBoletoTransactionCreateParameters<TMetadata extends Object> =
  ITransactionBase<TMetadata> & ITransactionBoletoParameters;

type ITransactionCreateParameters<TMetadata extends Object> =
  ICardTransactionCreateParameters<TMetadata>
  | IBoletoTransactionCreateParameters<TMetadata>;

type ITransactionCreateStaticCardFields = Partial<IWithCardHash>
& Partial<IWithCardId> & Partial<IWithDataForNewCard>;
type ITransactionAllFields<TMetadata extends Object> = ITransactionBase<TMetadata>
& ITransactionCreateStaticCardFields & ITransactionBoletoParameters;

export default ITransactionCreateParameters;
export interface ITransactionCreateAllFieldsParameters<TMetadata extends Object>
  extends ITransactionAllFields<TMetadata> {
}
