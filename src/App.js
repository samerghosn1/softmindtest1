import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import HomePage from './HomePage';
import Login from './Login/Login';

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<PrivateRoute />}>
					<Route element={<HomePage />} path='/' exact />
				</Route>
				<Route element={<Login />} path='/login' />
			</Routes>
		</Router>
	);
}

export default App;
