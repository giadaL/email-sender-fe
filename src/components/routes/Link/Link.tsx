import React from 'react';
import { useDispatch } from 'react-redux';
import { actions as routingActions } from '~/store/routing';
import { Routes } from '../urls';

export type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export type AnchorProps = Omit<
  React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  'href' // remove href, as it's ignored by the router
>;

export interface LinkProps extends AnchorProps {
  to: Routes;
}

const Link: React.FC<LinkProps> = ({ children, onClick, to, ...rest }: LinkProps) => {
  const dispatch = useDispatch();

  return (
    <a
      href={to}
      {...rest}
      onClick={(evt) => {
        if (onClick) {
          onClick(evt);
          if (evt.defaultPrevented) {
            return false;
          }
        }
        evt.preventDefault();
        dispatch(routingActions.linkTo(to));
        return false;
      }}
    >
      {children}
    </a>
  );
};

export default Link;
