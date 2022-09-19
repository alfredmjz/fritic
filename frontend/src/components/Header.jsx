import React from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate("/fritic/users/login");
	};

	const handleRegister = () => {
		navigate("/fritic/users/register");
	};

	return (
		<div className='container-fluid'>
			<div className='row align-items-center'>
				<div className='col-10 '>
					<h1 className='font-weight-light display-1 text-left'>Oishee</h1>
				</div>
				<div className='col-2 justify-content-md-end'>
					<button onClick={handleLogin} className='btn btn-bg btn-primary me-md-2' type='button'>
						Login
					</button>
					<button onClick={handleRegister} className='btn btn-bg btn-primary' type='button'>
						Register
					</button>
				</div>
			</div>
		</div>
	);
};
