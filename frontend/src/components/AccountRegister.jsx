/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import CountryFlag from "./CountryFlag";
import { useEffect } from "react";
import countries from "../api/countries";

export const AccountRegister = () => {
	const [countryList, setCountryList] = useState(null);

	useEffect(() => {
		const initializeList = async () => {
			try {
				const response = await countries.getAll();
				setCountryList(response);
			} catch (err) {
				console.error(err);
			}
		};
		initializeList();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div>
			<div
				className='container-fluid mx-auto my-5 px-4 py-5 border rounded-4'
				style={{ maxWidth: "35%", height: "100vh" }}
			>
				<h3 className='font-weight-light text-center mb-5'>Register an account</h3>
				<form action=''>
					<div className='mb-3'>
						<label htmlFor='Name' className='form-label'>
							Full Name
						</label>
						<input type='email' className='form-control' />
					</div>
					<div className='mb-3'>
						<label htmlFor='Email Address' className='form-label'>
							Email address
						</label>
						<input type='email' className='form-control' />
						<div id='emailHelp' className='form-text'>
							<span>We{"'"}ll never share your email with anyone else.</span>
						</div>
					</div>
					<div className='mb-3'>
						<label htmlFor='inputPassword' className='form-label'>
							Password
						</label>
						<input type='password' id='inputPassword' className='form-control' />
						<div id='passwordHelpBlock' className='form-text'>
							Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces,
							special characters, or emoji.
						</div>
					</div>
					<div className='mb-3'>
						<label htmlFor='Phone Number' className='form-label'>
							Phone Number
						</label>
						<div className='input-group ms-n1'>
							{countryList && <CountryFlag countryList={countryList} />}

							<input type='password' className='form-control' />
						</div>
					</div>
					<div className='mb-3 mt-5'>
						<button onClick={(e) => handleSubmit(e)} type='submit' className='btn btn-primary px-4 rounded-3'>
							Next
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
