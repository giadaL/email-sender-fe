import React from 'react';
import { IPageAttributes } from '~/schemas/schemas_d';
import styles from './Page.module.scss';

const Page: React.FC<IPageAttributes> = ({ children, ...rest }) => (
  <div className={styles.Page} {...rest}>
    {children}
  </div>
);

export default Page;
