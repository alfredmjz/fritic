import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import oishee from "../api/oishee";
import { RestaurantContext } from "../context/RestaurantContext";

const AddReview = () => {
	const { id } = useParams();
	const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [ratings, setRatings] = useState(1);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await oishee.createReview(id, { restaurant_uuid: id, name, content, ratings });
			setSelectedRestaurant({
				...selectedRestaurant,
				review: selectedRestaurant.review.concat(response.data.review),
			});
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className='mb-2'>
			<form action=''>
				<div className='row'>
					<div className='col'>
						<label htmlFor='name'>Name</label>
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							id='name'
							placeholder='Name'
							type='text'
							className='form-control'
						/>
					</div>
					<div className='col'>
						<label htmlFor='rating'>Rating</label>
						<select value={ratings} onChange={(e) => setRatings(e.target.value)} id='rating' className='form-select'>
							<option disabled></option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
				</div>
				<div className='form-group'>
					<label htmlFor='review'>Review</label>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						id='Review'
						className='form-control'
						placeholder='Write a review'
					></textarea>
				</div>
				<button type='submit' onClick={handleSubmit} className='mt-3 btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default AddReview;
