import Router from './router';
import Modal from './components/modal';
import Nav from './router/navigation';
import Login from './components/auth/login';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_LOGIN } from './state/types';

export default function App() {
  const dispatch = useDispatch();
  const { showLogin } = useSelector((state) => state.nav);

  const closeLoginModal = () => dispatch({ type: TOGGLE_LOGIN });

  return (
    <>
      <Nav></Nav>
      <Modal
        title="Login"
        description="Welcome back"
        component={Login}
        showModal={showLogin}
        onCloseModal={closeLoginModal}
      />
      <Router />
    </>
  );
}
