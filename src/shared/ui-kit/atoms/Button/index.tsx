/* eslint-disable react/button-has-type */
import { ComponentProps } from 'react';
import cn from 'classnames';
import css from './index.module.css';

interface IButton extends ComponentProps<'button'> {
  btnType?: 'primary' | 'secondary' | 'tertiary';
  actionMood?: 'positive' | 'negative' | null;
  iconPosition?: 'before' | 'after' | null;
  size?: 'S' | 'M';
}

export const Button = ({
  btnType = 'primary',
  actionMood = null,
  iconPosition = null,
  size = 'M',
  className,
  children,
  ...props
}: IButton) => (
  <button
    data-actionmood={actionMood}
    data-iconposition={iconPosition}
    className={cn(css.btn, className, {
      [css['btn-primary']]: btnType === 'primary',
      [css['btn-secondary']]: btnType === 'secondary',
      [css['btn-tertiary']]: btnType === 'tertiary',
      [css['btn--xs']]: size === 'S',
    })}
    type={props.type || 'button'}
    {...props}
  >
    {children}
  </button>
);
