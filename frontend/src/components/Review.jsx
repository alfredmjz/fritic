import React from "react";
import StarRating from "./StarRating";

const Review = () => {
	return (
		<div className='row row-cols-4 me-3'>
			<div className='card fs-6 text-bg-primary bg-primary mb-auto me-4 mw-30 py-3'>
				<div className='card-header d-flex justify-content-between'>
					<span>Joane</span>
					<span>
						<StarRating rating={3} />
					</span>
				</div>
				<div className='card-body'>
					<p className='card-text'>This restaurant is meh</p>
				</div>
			</div>
		</div>
	);
};

export default Review;
