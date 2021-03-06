import ICreateRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/create';
import IUpdateRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/update';
import IBalanceRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/balance';
import ITransferSettingsRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/transfer/settings';
import IListRecipientV5Response from './namespaces/recipients/v5/list';
import IRecipientV5 from '../common/recipient/v5';
import ICreateStandaloneSubscriptionV5Response from './namespaces/subscription/create';

namespace Responses {
  export namespace V5 {
    export namespace Recipient {
      export type Create = ICreateRecipientV5Response;
      export type Update = IUpdateRecipientV5Response;
      export type Balance = IBalanceRecipientV5Response;
      export type TransferSettings = ITransferSettingsRecipientV5Response;
      export type List = IListRecipientV5Response;
      export type Detail = IRecipientV5;
    }
    export namespace Subscription {
      export namespace Standalone {
        export type Create = ICreateStandaloneSubscriptionV5Response;
      }
    }
  }

}
export default Responses;
