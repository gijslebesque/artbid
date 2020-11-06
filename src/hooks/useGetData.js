import { useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';

export const useGetData = (connectTo) => {
  useFirebaseConnect(connectTo);

  const data = useSelector((state) => state.firebase);
  const { requesting, ordered } = data;
  const req = Object.values(requesting).filter((e) => e);

  const loading = req.length > 0;

  return {
    ...ordered,
    loading,
  };
};
