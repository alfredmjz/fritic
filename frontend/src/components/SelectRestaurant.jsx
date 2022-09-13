import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import oishee from "../api/oishee";

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
			<h1 className='text-center'>{selectedRestaurant && selectedRestaurant.name}</h1>
		</div>
	);
};

export default SelectRestaurant;
