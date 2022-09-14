import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import oishee from "../api/oishee";
import StarRating from "./StarRating";

const SelectRestaurant = (props) => {
	const { id } = useParams();
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await oishee.getOne(id);
				setSelectedRestaurant(response.data.restaurant);
				console.log(selectedRestaurant);
			} catch (err) {
				console.error(err);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1 className='text-center'>{selectedRestaurant && <StarRating rating={5} />}</h1>
		</div>
	);
};

export default SelectRestaurant;
