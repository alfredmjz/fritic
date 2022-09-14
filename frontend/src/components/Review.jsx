import React from "react";
import StarRating from "./StarRating";

const Review = ({ reviews }) => {
	return (
		<div className='row row-cols-3 mb-2'>
			{reviews.map((review) => {
				return (
					<div key={review.uuid} className='card fs-6 text-bg-primary bg-primary py-3 mx-1' style={{ maxWidth: "30%" }}>
						<div className='card-header d-flex justify-content-between'>
							<span>{review.name}</span>
							<span>
								<StarRating rating={review.ratings} />
							</span>
						</div>
						<div className='card-body'>
							<p className='card-text'>{review.content}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Review;
