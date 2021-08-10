import ICreateCardByCardHash from './by-hash';
import ICreateCardByCardInfo from './by-info';

type ICreateCardParameters = ICreateCardByCardHash | ICreateCardByCardInfo;
export default ICreateCardParameters;
