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
    | 'addressform'
    | 'bioform'
    | 'documentsform'
    | 'paymentform'
    | 'paymentform.paymentinfo'
    | 'paymentform.paymentprocess'
    | 'result'
    | 'sending'
    | { paymentform?: 'paymentinfo' | 'paymentprocess' };
  tags: never;
}
