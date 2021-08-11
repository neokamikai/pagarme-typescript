import AutomaticAnticipationType from './enums/automatic-anticipation-type';
import ICaptureTransactionParameters from './interfaces/client/parameters/transaction/capture';
import CreateTransactionParameters from './interfaces/client/parameters/transaction/create';

namespace PagarMeTypes {
  export namespace Interfaces {
    export namespace Payload {
      export namespace Transaction {
        export type Create<TMetadata extends any = any> = CreateTransactionParameters<TMetadata>;
        export type Capture<TMetadata extends any = any> = ICaptureTransactionParameters<TMetadata>;
      }
    }
  }
  export namespace Types {
    export type AnticipationType = AutomaticAnticipationType;
  }
}

export default PagarMeTypes;
