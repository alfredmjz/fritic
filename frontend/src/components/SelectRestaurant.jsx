/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import oishee from "../api/oishee";
import { RestaurantContext } from "../context/RestaurantContext";
import AddReview from "./AddReview";
import Review from "./Review";
import StarRating from "./StarRating";

const SelectRestaurant = () => {
	const { id } = useParams();
	const { clicked, setClicked, selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await oishee.getOne(id);
				setSelectedRestaurant(response.data);
				setClicked(0);
			} catch (err) {
				console.error(err);
			}
		};
		console.log("here");
		fetchData();
	}, [clicked, setSelectedRestaurant]);

	return (
		<div>
			{selectedRestaurant && (
				<>
					<h1 className='text-center display-1'> {selectedRestaurant.restaurant.name}</h1>
					<div className='text-center'>
						<StarRating rating={selectedRestaurant.restaurant.average_rating} />
						<span className='text-warning ms-1'>
							{selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "(0)"}
						</span>
					</div>

					<div className='mt-3'>
						<Review reviews={selectedRestaurant.review} />
					</div>
					<AddReview />
				</>
			)}
		</div>
	);
};

export default SelectRestaurant;
