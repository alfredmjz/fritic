import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import oishee from "../api/oishee";
import AddReview from "./AddReview";
import Review from "./Review";

const SelectRestaurant = (props) => {
	const { id } = useParams();
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await oishee.getOne(id);
				setSelectedRestaurant(response.data);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1 className='text-center display-1'>{selectedRestaurant.restaurant.name}</h1>
			{selectedRestaurant && (
				<>
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
