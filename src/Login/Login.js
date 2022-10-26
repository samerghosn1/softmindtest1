import { TextField } from '@mui/material';
import { Button, TextInput, toaster } from 'evergreen-ui';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (user === 'user' && password === 'ab7ss9x') {
			localStorage.setItem('isAuth', true);
			navigate('/');
		} else {
			toaster.danger(' Incorrect Username/Password');
		}
		console.log(localStorage.getItem('isAuth'));
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
			}}>
			<div style={{ paddingTop: 10, marginBottom: 5 }}>
				<TextField
					name='username'
					value={user}
					onChange={(e) => {
						setUser(e.target.value);
					}}
					label='Username'
					required
				/>
			</div>
			<div style={{ marginBottom: 5 }}>
				<TextField
					name='password'
					type='password'
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					label='Password'
					required
				/>
			</div>
			<div>
				<Button onClick={handleSubmit}>Login</Button>
			</div>
		</div>
	);
};

export default Login;
