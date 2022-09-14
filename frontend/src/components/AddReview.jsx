import React, { useState } from "react";

const AddReview = () => {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [rating, setRating] = useState("");

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
						<select value={rating} onChange={(e) => setRating(e.target.value)} id='rating' className='form-select'>
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
				<button className='mt-3 btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default AddReview;
