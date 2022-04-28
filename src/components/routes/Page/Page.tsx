import React from 'react';
import { PageAttributes } from '~/schemas/compAttributes_d';
import styles from './Page.module.scss';

const Page: React.FC<PageAttributes> = ({ children, ...rest }) => (
  <div className={styles.Page} {...rest}>
    {children}
  </div>
);

export default Page;
