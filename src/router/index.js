import Todos from '../components/getData';
import { Switch, Route } from 'react-router-dom';
import ProtectedPage from '../components/auth/protectedPage';

export default function Router() {
  return (
    <Switch>
      <Route
        path="/profile"
        render={(props) => (
          <ProtectedPage {...props} to="/login">
            <Todos />
          </ProtectedPage>
        )}
      ></Route>
    </Switch>
  );
}
