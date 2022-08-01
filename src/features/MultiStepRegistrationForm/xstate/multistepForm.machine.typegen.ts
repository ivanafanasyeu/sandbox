// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingActions: {
    updateData: 'NEXT' | 'PREV';
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates:
    | 'bioform'
    | 'addressform'
    | 'documentsform'
    | 'paymentform'
    | 'paymentform.paymentinfo'
    | 'paymentform.paymentprocess'
    | 'sending'
    | 'result'
    | { paymentform?: 'paymentinfo' | 'paymentprocess' };
  tags: never;
}
