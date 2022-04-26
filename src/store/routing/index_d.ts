export type RoutingLocation = {
  hash: string;
  pathname: string;
  search: string;
  state: Object;
};

export type Routing = {
  location: RoutingLocation;
};
