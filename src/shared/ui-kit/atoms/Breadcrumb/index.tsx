import { ComponentProps, FC } from 'react';
import cn from 'classnames';

import css from './index.module.css';

export type BreadcrumbType = ComponentProps<'div'> & {
  isCurrent: boolean;
  index: number;
  breadcrumbType: 'indicator' | 'formatted';
  testidPrefix?: string;
};

export const Breadcrumb: FC<BreadcrumbType> = ({
  children,
  index,
  breadcrumbType,
  isCurrent,
  testidPrefix = 'breadcrumb',
  ...props
}) => (
  <div
    data-current={isCurrent}
    data-testid={`${testidPrefix}_${index}`}
    className={cn(props.className, {
      [css.indicator]: breadcrumbType === 'indicator',
      // [css.formatted]: breadcrumbType === 'formatted',
    })}
  >
    {children}
  </div>
);
