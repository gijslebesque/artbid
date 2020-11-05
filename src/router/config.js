import Profile from '../pages/profile';
import ProtectedPage from '../components/auth/protectedPage';

export const routes = [
  {
    path: '/profile',
    component: () => (
      <ProtectedPage>
        <Profile />
      </ProtectedPage>
    ),
  },
];
