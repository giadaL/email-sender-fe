import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { match as pathMatch } from 'path-to-regexp';

import { selectors as routingSelectors } from '~/store/routing';

import styles from './Router.module.scss';

type RouterAttributes = {
  children?: Array<ReactElement<{ path: string }>>;
};

const useFirstPage = (children) =>
  useSelector((state) => {
    const { pathname, search, hash } = routingSelectors.getLocation(state);
    const uri = `${pathname}${search}${hash}`;
    const child = children.find((element) => {
      const matches = pathMatch(element.props.path, { end: false })(uri);
      return matches;
    });
    return child;
  });

const Router: React.FC<RouterAttributes> = ({ children }) => {
  const first = useFirstPage(children);
  const child = children ? first : null;
  return <div className={styles.Router}>{child || <></>}</div>;
};

export default Router;
