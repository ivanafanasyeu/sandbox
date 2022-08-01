import { useMachine } from '@xstate/react';
import { multistepFormMachine } from './xstate/multistepForm.machine';

export const MultiStepRegistrationForm = () => {
  const [current, send] = useMachine(multistepFormMachine);

  return (
    <div>
      <section></section>
      <section></section>
    </div>
  );
};
