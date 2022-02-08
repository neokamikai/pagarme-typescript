import ICreateRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/create';
import IUpdateRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/update';
import IBalanceRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/balance';
import ITransferSettingsRecipientV5Response from 'src/@types/interfaces/api/responses/namespaces/recipients/v5/transfer/settings';

namespace Responses {
  export namespace V5 {
    export namespace Recipient {
      export type Create = ICreateRecipientV5Response;
      export type Update = IUpdateRecipientV5Response;
      export type Balance = IBalanceRecipientV5Response;
      export type TransferSettings = ITransferSettingsRecipientV5Response;
    }
  }

}
export default Responses;
