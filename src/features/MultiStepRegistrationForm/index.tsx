import { useMachine } from '@xstate/react';
import { Button } from 'shared/ui-kit/atoms/Button';

import { Breadcrumbs } from 'shared/ui-kit/molecules/Breadcrumbs';

import { multistepFormMachine } from './xstate/multistepForm.machine';

export const MultiStepRegistrationForm = () => {
  const [current, send] = useMachine(multistepFormMachine);

  return (
    <div>
      <section>
        <h2>Registration form</h2>
        <Breadcrumbs
          breadcrumbType="indicator"
          currentIndex={0}
          breadcrumbs={[{ id: '0' }, { id: '1' }, { id: '2' }, { id: '3' }]}
          testidPrefix="step_breadcrumb"
          testid="step_breadcrumbs"
        />
      </section>
      <section>
        <h2>Data preview</h2>
        <Button data-testid="btn_next">NEXT</Button>
      </section>
    </div>
  );
};
