import React from "react";
import { Link } from "react-router-dom";

export const AccountLogin = () => {
	const toggleVisibility = (e) => {
		e.preventDefault();
		const target = document.getElementById("passwordInput");
		target.type = target.type === "password" ? "text" : "password";
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div className='container-fluid mx-auto my-5 px-4 py-5 border rounded-4' style={{ maxWidth: "35%" }}>
				<h3 className='font-weight-light text-center mb-5'>Log in to your account</h3>
				<form action=''>
					<div className='mb-3'>
						<label htmlFor='Email Address' className='form-label'>
							Email address
						</label>
						<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
						<div id='emailHelp' className='form-text'>
							<span>We{"'"}ll never share your email with anyone else.</span>
						</div>
					</div>
					<div className='mb-3'>
						<label htmlFor='Password' className='form-label'>
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
					<div className='mb-3'>
						<button onClick={(e) => handleSubmit(e)} type='submit' className='btn btn-primary px-4 rounded-3'>
							Next
						</button>

						<span id='registerLink' className='ms-3 form-text'>
							<small>
								Don{"'"}t have an account?{" "}
								<Link to='/fritic/users/register' className='link-primary'>
									Sign Up
								</Link>
							</small>
						</span>
					</div>
				</form>
			</div>
		</div>
	);
};
