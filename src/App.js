import Router from './router';
import Modal from './components/modal';
import Nav from './components/navigation/navigation';
import Login from './components/auth/login';
import { useSelector, useDispatch } from 'react-redux';
import { TOGGLE_LOGIN } from './state/types';

export default function App() {
  const dispatch = useDispatch();
  const { showLogin } = useSelector((state) => state.nav);

  const closeLoginModal = () => dispatch({ type: TOGGLE_LOGIN });

  return (
    <>
      <Nav />
      <Modal
        title="Login"
        component={Login}
        showModal={showLogin}
        onCloseModal={closeLoginModal}
      />
      <Router />
    </>
  );
}
