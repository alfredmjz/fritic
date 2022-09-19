import React from "react";
import { Header } from "../components/Header";

const Login = () => {
	const toggleVisibility = (e) => {
		e.preventDefault();
		const target = document.getElementById("passwordInput");
		target.type = target.type === "password" ? "text" : "password";
	};

	return (
		<div>
			<Header />
			<div className='container-fluid mx-auto my-5 px-4 py-5 border rounded-4' style={{ maxWidth: "35%" }}>
				<h3 className='font-weight-light text-center'>Login</h3>
				<form>
					<div className='mb-3'>
						<label placeholder='Email Address' htmlFor='exampleInputEmail1' className='form-label'></label>
						<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
						<div id='emailHelp' className='form-text'>
							<span>We{"'"}ll never share your email with anyone else.</span>
						</div>
					</div>
					<div className='mb-3'>
						<label placeholder='Password' htmlFor='exampleInputPassword1' className='form-label'>
							Password
						</label>
						<input type='password' className='form-control' id='passwordInput' />
					</div>
					<div className='mb-3 form-check'>
						<input onClick={(e) => toggleVisibility(e)} type='checkbox' className='form-check-input' />
						<label className='form-check-label' htmlFor='exampleCheck1'>
							Show
						</label>
					</div>
					<button type='submit' className='btn btn-primary'>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
