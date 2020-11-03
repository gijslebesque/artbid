import Loging from './components/login';
import Todos from './components/getData';
import { Switch, Route } from 'react-router-dom';
import ProtectedPage from './components/authentication/protectedPage';

export default function App() {
  return (
    <Switch>
      <Route path="/login">
        <Loging />
      </Route>
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
