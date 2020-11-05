import Router from './router';
import Modal from './components/modal';
import Nav from './router/navigation';
import Login from './components/auth/login';

export default function App() {
  return (
    <>
      <Nav></Nav>
      <Modal title="Login" description="" component={Login} />
      <Router />
    </>
  );
}
