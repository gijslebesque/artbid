import { Switch, Route } from 'react-router-dom';
import { routes } from './config';

export default function Router() {
  return (
    <Switch>
      {routes.map(({ name, ...rest }) => (
        <RouteItem key={name} name={name} {...rest} />
      ))}
    </Switch>
  );
}

const RouteItem = ({ path, component: Component, ...rest }) => (
  <Route path={path} render={(props) => <Component {...props} {...rest} />} />
);
