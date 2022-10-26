import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = (props) => {
	const isAuth = localStorage.getItem('isAuth');

	return isAuth ? <Outlet {...props} /> : <Navigate to='/login' />;
};

export default PrivateRoute;
