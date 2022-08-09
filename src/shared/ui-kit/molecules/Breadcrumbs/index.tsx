import { Breadcrumb, BreadcrumbType } from 'shared/ui-kit/atoms/Breadcrumb';

import css from './index.module.css';

type Breadcrumb = { id: string; [key: string]: any };

type Breadcrumbs<T extends Breadcrumb> = Pick<BreadcrumbType, 'testidPrefix' | 'breadcrumbType'> & {
  breadcrumbs: T[];
  currentIndex: number;
  formatToValue?: (v: T) => React.ReactNode | null;
  testid?: string;
};

export const Breadcrumbs = <T extends Breadcrumb>({
  breadcrumbs,
  currentIndex,
  formatToValue,
  testidPrefix,
  testid,
  breadcrumbType,
}: Breadcrumbs<T>) => (
  <section data-testid={testid} className={css.breadcrumbs}>
    {breadcrumbs.map((b, i) => (
      <Breadcrumb
        isCurrent={currentIndex === i}
        breadcrumbType={breadcrumbType}
        testidPrefix={testidPrefix}
        key={b.id}
        index={i}
      >
        {formatToValue ? formatToValue(b) : null}
      </Breadcrumb>
    ))}
  </section>
);
