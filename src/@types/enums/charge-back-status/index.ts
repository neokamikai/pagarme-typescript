/* ChargeBackStatus: presented | represented */

const ChargeBackStatusPresented = 'presented';
const ChargeBackStatusRepresented = 'represented';

export const ChargeBackStatusEnums = {
  ChargeBackStatusPresented:
    ChargeBackStatusPresented as typeof ChargeBackStatusPresented,
  ChargeBackStatusRepresented:
    ChargeBackStatusRepresented as typeof ChargeBackStatusRepresented,
};

type ChargeBackStatus = typeof ChargeBackStatusPresented
  | typeof ChargeBackStatusRepresented;

export default ChargeBackStatus;
