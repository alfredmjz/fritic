import React from "react";

export const AccountRegister = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div className='container-fluid mx-auto my-5 px-4 py-5 border rounded-4' style={{ maxWidth: "35%" }}>
				<h3 className='font-weight-light text-center mb-5'>Register an account</h3>
				<form action=''>
					<div className='mb-3'>
						<label htmlFor='Name' className='form-label'>
							Full Name
						</label>
						<input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' />
					</div>
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
						<label htmlFor='inputPassword5' className='form-label'>
							Password
						</label>
						<input type='password' id='inputPassword5' className='form-control' aria-describedby='passwordHelpBlock' />
						<div id='passwordHelpBlock' className='form-text'>
							Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
							special characters, or emoji.
						</div>
					</div>
					<div className='mb-3'>
						<label htmlFor='inputPassword5' className='form-label'>
							Phone Number
						</label>
						<div className='input-group'>
							<span className='input-group-text' id='basic-addon1'>
								@
							</span>
							<input
								type='password'
								id='inputPassword5'
								className='form-control'
								aria-describedby='passwordHelpBlock'
							/>
						</div>
					</div>
					<div className='mb-3'>
						<button onClick={(e) => handleSubmit(e)} type='submit' className='btn btn-primary px-4 rounded-3'>
							Next
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
