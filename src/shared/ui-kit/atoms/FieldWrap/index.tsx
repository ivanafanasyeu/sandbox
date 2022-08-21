import { ComponentProps } from 'react';
import cn from 'classnames';

import css from './index.module.css';

export interface IFieldWrap {
  label: string | JSX.Element;
  id: string;
  children: React.ReactNode;
  isLabelHidden?: boolean;
  labelProps?: Omit<ComponentProps<'label'>, 'htmlFor'>;
  wrapProps?: ComponentProps<'div'>;
  validationMsg?: string;
  validationMsgIsError?: boolean;
  validationMsgIsSuccess?: boolean;
}

export const FieldWrap = ({
  children,
  label,
  id,
  isLabelHidden,
  labelProps,
  wrapProps,
  validationMsg,
  validationMsgIsError,
  validationMsgIsSuccess,
}: IFieldWrap) => (
  <div className={cn(css.fieldbox, wrapProps?.className)} {...wrapProps}>
    <label
      className={cn(css.label, labelProps?.className)}
      data-hiddenlabel={isLabelHidden}
      htmlFor={id}
      {...labelProps}
    >
      {label}
    </label>
    {children}
    <p
      className={css['validation-message']}
      data-iserror={validationMsgIsError}
      data-issuccess={validationMsgIsSuccess}
    >
      {validationMsg}
    </p>
  </div>
);
