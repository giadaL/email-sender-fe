import React from 'react';
import styles from './Page.module.scss';

export interface PageAttributes extends React.HTMLAttributes<HTMLElement> {
  path: string;
}

const Page: React.FC<PageAttributes> = ({ children, ...rest }) => (
  <div className={styles.Page} {...rest}>
    {children}
  </div>
);

export default Page;
