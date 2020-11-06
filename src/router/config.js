import Profile from '../pages/profile';
import ProtectedPage from '../components/auth/protectedPage';
import Home from '../pages/home';
import Artworks from '../pages/artworks';

export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: (props) => <Home {...props} />,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: (props) => (
      <ProtectedPage>
        <Profile {...props} />
      </ProtectedPage>
    ),
  },

  {
    path: '/artworks',
    name: 'Artworks',
    component: (props) => <Artworks {...props} />,
  },
];
