import { ChangeEvent } from 'react';
import { Control, Controller } from 'react-hook-form';

import { TextInput, TextInputProps } from '.';

type Props = Omit<TextInputProps, 'value | onChange | onBlur'> & {
  control: Control<any, any>;
  onCustomChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const RHFControllerTextInput = ({ control, onCustomChange = (e) => e, ...props }: Props) => (
  <Controller
    name={props.name}
    control={control}
    defaultValue={''}
    render={({ field: { value, onChange, onBlur } }) => (
      <TextInput
        value={value}
        onChange={(e) => {
          onChange(onCustomChange(e));
        }}
        onBlur={onBlur}
        {...props}
      />
    )}
  />
);
RHFControllerTextInput.displayName = 'TextInput';
