import { assign, createMachine } from 'xstate';

import {
  BioFormFields,
  AddressFormFields,
  DocumentFormFields,
  PaymentFormFields,
} from './../lib/types/fields';

type _DataType = BioFormFields | AddressFormFields | DocumentFormFields | PaymentFormFields;

interface Context {
  formsdata: _DataType | Record<string, never>;
  step: number;
  // might be used for any loading, processing step for block other actions
  processing: boolean;
}

type Events =
  | {
      type: 'NEXT';
      data: _DataType;
    }
  | {
      type: 'PREV';
      data?: _DataType;
    };

const schema = {
  context: {} as Context,
  events: {} as Events,
};

export const multistepFormMachine = createMachine(
  {
    // Types comes from the VSCode ext. for xstate or CLI,
    // read more: https://xstate.js.org/docs/guides/typescript.html#typegen
    tsTypes: {} as import('./multistepForm.machine.typegen').Typegen0,
    schema,
    id: 'multistepformmachine',
    initial: 'bioform',
    context: {
      formsdata: {},
      step: 0,
      processing: false,
    },
    states: {
      bioform: {
        on: {
          NEXT: {
            target: 'addressform',
            actions: ['updateData'],
          },
        },
      },
      addressform: {
        on: {
          NEXT: {
            target: 'documentsform',
            actions: ['updateData'],
          },
          PREV: {
            target: 'bioform',
            actions: ['updateData'],
          },
        },
      },
      documentsform: {
        on: {
          NEXT: {
            target: 'paymentform',
            actions: ['updateData'],
          },
          PREV: {
            target: 'addressform',
            actions: ['updateData'],
          },
        },
      },
      paymentform: {
        initial: 'paymentinfo',
        states: {
          paymentinfo: {},
          paymentprocess: {
            // possibly can contains a few step inside
          },
        },
      },
      sending: {},
      result: {
        type: 'final',
      },
    },
  },
  {
    actions: {
      updateData: assign({
        formsdata: (ctx, { data }) => ({ ...data, ...ctx.formsdata }),
      }),
    },
  }
);
