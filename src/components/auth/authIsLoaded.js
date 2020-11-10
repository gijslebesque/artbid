import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import Spinner from '../spinner';

export const AuthIsLoaded = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth)) return <Spinner className="full-width full-height" />;
  return children;
};
