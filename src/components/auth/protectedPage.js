import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProtectedPage = ({ authExists, children, to = '/' }) => {
  if (authExists) return children;
  else return <Redirect to={to} />;
};

export default connect(({ firebase: { auth } }) => ({
  authExists: !!auth && !!auth.uid,
}))(ProtectedPage);
