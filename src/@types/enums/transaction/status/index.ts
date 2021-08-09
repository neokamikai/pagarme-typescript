/** Transação está em processo de autorização. */
const TransactionStatusProcessing = 'processing';

/** Transação foi autorizada. Cliente possui saldo na conta e
 * este valor foi reservado para futura captura, que deve
 * acontecer em até 5 dias para transações criadas com api_key.
 * Caso não seja capturada, a autorização é cancelada automaticamente
 * pelo banco emissor, e o status dela permanece como authorized. */
const TransactionStatusPuthorized = 'authorized';

/** Transação paga. Foi autorizada e capturada com sucesso.
 * Para Boleto, significa que nossa API já identificou o pagamento de seu cliente. */
const TransactionStatusPaid = 'paid';

/** Transação estornada completamente. */
const TransactionStatusPefunded = 'refunded';

/** Transação aguardando pagamento (status válido para Boleto bancário). */
const TransactionStatusPaitingPayment = 'waiting_payment';

/** Transação do tipo Boleto e que está aguardando confirmação do estorno solicitado. */
const TransactionStatusPendingRefund = 'pending_refund';

/** Transação recusada, não autorizada. */
const TransactionStatusPefused = 'refused';

/** Transação sofreu chargeback. Veja mais sobre isso em nossa central de ajuda */
const TransactionStatusPhargedback = 'chargedback';

/** Transação encaminhada para a análise manual feita por um especialista em prevenção a fraude. */
const TransactionStatusPnalyzing = 'analyzing';

/** Transação pendente de revisão manual por parte do lojista.
 * Uma transação ficará com esse status por até 48 horas corridas. */
const TransactionStatusPendingReview = 'pending_review';

type TransactionStatus = typeof TransactionStatusProcessing
| typeof TransactionStatusPuthorized
| typeof TransactionStatusPaid
| typeof TransactionStatusPefunded
| typeof TransactionStatusPaitingPayment
| typeof TransactionStatusPendingRefund
| typeof TransactionStatusPefused
| typeof TransactionStatusPhargedback
| typeof TransactionStatusPnalyzing
| typeof TransactionStatusPendingReview;

export const TransactionStatusEnums = {
  TransactionStatusProcessing:
    TransactionStatusProcessing as typeof TransactionStatusProcessing,
  TransactionStatusPuthorized:
    TransactionStatusPuthorized as typeof TransactionStatusPuthorized,
  TransactionStatusPaid:
    TransactionStatusPaid as typeof TransactionStatusPaid,
  TransactionStatusPefunded:
    TransactionStatusPefunded as typeof TransactionStatusPefunded,
  TransactionStatusPaitingPayment:
    TransactionStatusPaitingPayment as typeof TransactionStatusPaitingPayment,
  TransactionStatusPendingRefund:
    TransactionStatusPendingRefund as typeof TransactionStatusPendingRefund,
  TransactionStatusPefused:
    TransactionStatusPefused as typeof TransactionStatusPefused,
  TransactionStatusPhargedback:
    TransactionStatusPhargedback as typeof TransactionStatusPhargedback,
  TransactionStatusPnalyzing:
    TransactionStatusPnalyzing as typeof TransactionStatusPnalyzing,
  TransactionStatusPendingReview:
    TransactionStatusPendingReview as typeof TransactionStatusPendingReview,
};

export default TransactionStatus;
