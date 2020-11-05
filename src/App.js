import Router from './router';
import Modal from './components/modal';
import Nav from './router/navigation';
import Login from './components/auth/login';
import { useSelector, useDispatch } from 'react-redux';

export default function App() {
  const dispatch = useDispatch();
  const { showLogin } = useSelector((state) => state.nav);

  const closeLoginModal = () => dispatch({ type: 'toggleLogin' });

  return (
    <>
      <Nav></Nav>
      <Modal
        title="Login"
        description=""
        component={Login}
        showModal={showLogin}
        onCloseModal={closeLoginModal}
      />
      <Router />
    </>
  );
}
