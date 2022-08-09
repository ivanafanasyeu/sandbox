import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { MultiStepRegistrationForm } from '..';
import { BioFormFields } from '../lib/types/fields';

describe('MultiStepRegistrationForm works properly', () => {
  it('Renders properly', () => {
    render(<MultiStepRegistrationForm />);
    expect(screen.getAllByText('Registration form')).toBeInTheDocument;
  });

  it('Have steps & starts with a step one', () => {
    render(<MultiStepRegistrationForm />);
    expect(screen.getByTestId('step_breadcrumbs')).toBeInTheDocument;
    expect(screen.getByTestId('step_breadcrumb_0')).toBeInTheDocument;
    expect(screen.getByTestId('step_breadcrumb_0')).toHaveAttribute('data-current', 'true');
  });

  it('Have all inputs & going to the second step', () => {
    render(<MultiStepRegistrationForm />);
    expect(screen.getByTestId('btn_next')).toBeInTheDocument();
    const FIELDS_NAMES: Record<string, keyof BioFormFields> = {
      FULLNAME: 'fullname',
      EMAIL: 'email',
      BIRTHDAY: 'birthday',
      BIRTHMONTH: 'birthmonth',
      BIRTHYEAR: 'birthyear',
      // GENDER test as a radio button
      // NATIONALITY test as an autosuggest input
    };
    expect(screen.getAllByTestId(`input_${FIELDS_NAMES.FULLNAME}`)).toBeInTheDocument;
    expect(screen.getAllByTestId(`input_${FIELDS_NAMES.EMAIL}`)).toBeInTheDocument;
    expect(screen.getAllByTestId(`input_${FIELDS_NAMES.BIRTHDAY}`)).toBeInTheDocument;
    expect(screen.getAllByTestId(`input_${FIELDS_NAMES.BIRTHMONTH}`)).toBeInTheDocument;
    expect(screen.getAllByTestId(`input_${FIELDS_NAMES.BIRTHYEAR}`)).toBeInTheDocument;
  });
});
