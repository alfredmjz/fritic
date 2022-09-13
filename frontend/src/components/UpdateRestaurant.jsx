import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import oishee from "../api/oishee";

const UpdateRestaurant = (props) => {
	const { id } = useParams();
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			const response = await oishee.getOne(id);
			setName(response.data.restaurant.name);
			setLocation(response.data.restaurant.address);
			setPriceRange(response.data.restaurant.price_range);
		};
		fetchData();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const request = await oishee.update(id, {
				name,
				address: location,
				price_range: priceRange,
			});
			navigate("/");
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div>
			<form action=''>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						value={name}
						onChange={(e) => setName(e.target.value)}
						id='name'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='location'>Location</label>
					<input
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						id='location'
						className='form-control'
						type='text'
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='priceRange'>Price Range</label>
					<input
						value={priceRange}
						onChange={(e) => setPriceRange(e.target.value)}
						id='priceRange'
						className='form-control'
						type='number'
						min='1'
						max='5'
					/>
				</div>
				<button type='submit' onClick={handleSubmit} className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default UpdateRestaurant;
