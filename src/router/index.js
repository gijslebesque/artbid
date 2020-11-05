import { Switch, Route } from 'react-router-dom';
import { routes } from './config';

export default function Router() {
  return (
    <Switch>
      {routes.map((r) => (
        <R {...r} />
      ))}
    </Switch>
  );
}

const R = ({ path, component: Component, ...rest }) => (
  <Route path={path} render={(props) => <Component {...props} {...rest} />} />
);
