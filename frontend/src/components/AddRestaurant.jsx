import React, { useState } from "react";
import { useContext } from "react";
import oishee from "../api/oishee";
import { RestaurantContext } from "../context/RestaurantContext";

export const AddRestaurant = () => {
	const { addRestaurant } = useContext(RestaurantContext);
	const [name, setName] = useState("");
	const [location, setLocation] = useState("");
	const [priceRange, setPriceRange] = useState(1);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await oishee.create({ name, address: location, price_range: priceRange });
			addRestaurant(response.data.restaurant);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className='container text-center'>
			<form className='row' action=''>
				<div className='col'>
					<input
						input={name}
						onChange={(e) => setName(e.target.value)}
						type='text'
						placeholder='Name'
						className='form-control'
					/>
				</div>
				<div className='col'>
					<input
						input={location}
						onChange={(e) => setLocation(e.target.value)}
						type='text'
						placeholder='Location'
						className='form-control'
					/>
				</div>
				<div className='col-auto'>
					<select input={priceRange} onChange={(e) => setPriceRange(e.target.value)} className='form-select'>
						<option disabled>Price Range</option>
						<option value='1'>$</option>
						<option value='2'>$$</option>
						<option value='3'>$$$</option>
						<option value='4'>$$$$</option>
						<option value='5'>$$$$$</option>
					</select>
				</div>
				<div className='col-auto'>
					<button onClick={handleSubmit} type='submit' className='btn btn-primary'>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};
