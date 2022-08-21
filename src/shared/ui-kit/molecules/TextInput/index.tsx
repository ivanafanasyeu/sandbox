import { ComponentProps, FC, ForwardedRef } from 'react';
import cn from 'classnames';

import css from './index.module.css';
import { FieldWrap, IFieldWrap } from 'shared/ui-kit/atoms/FieldWrap';

export type TextInputProps = IFieldWrap &
  Omit<ComponentProps<'input'>, 'id' | 'ref' | 'name'> & {
    name: string;
    leadingIcon?: JSX.Element | React.ReactNode;
    trailingIcon?: JSX.Element | React.ReactNode;
    reassignedRef?: ForwardedRef<HTMLInputElement> | React.LegacyRef<HTMLInputElement> | undefined;
  };

export const TextInput: FC<TextInputProps> = ({
  id,
  type = 'text',
  className,
  label,
  isLabelHidden = false,
  labelProps,
  wrapProps,
  validationMsg,
  validationMsgIsError,
  validationMsgIsSuccess,
  leadingIcon,
  trailingIcon,
  required,
  reassignedRef,
  ...props
}: TextInputProps) => (
  <FieldWrap
    label={label}
    isLabelHidden={isLabelHidden}
    id={id}
    labelProps={labelProps}
    wrapProps={wrapProps}
    validationMsg={validationMsg}
    validationMsgIsError={validationMsgIsError}
    validationMsgIsSuccess={validationMsgIsSuccess}
  >
    <div className={css.relativewrap}>
      <div className={cn(css.leadingicon)}>{leadingIcon}</div>
      <input
        aria-invalid={validationMsgIsError && validationMsg ? 'true' : 'false'}
        aria-required={required ? 'true' : 'false'}
        className={cn(css.input, className)}
        type={type}
        ref={reassignedRef}
        id={id}
        required={required}
        {...props}
      />
      <div className={cn(css.trailingicon)}>{trailingIcon}</div>
    </div>
  </FieldWrap>
);
