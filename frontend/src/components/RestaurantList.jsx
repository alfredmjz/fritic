import React, { useContext } from "react";
import { useEffect } from "react";
import oishee from "../api/oishee";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantList = (props) => {
	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	useEffect(() => {
		const initializeList = async () => {
			try {
				const response = await oishee.getAll();
				setRestaurants(response.data.restaurant);
			} catch (err) {
				console.error(err);
			}
		};

		initializeList();
	}, []);

	const handleDelete = async (id) => {
		try {
			await oishee.remove(id);
			setRestaurants(
				restaurants.filter((restaurant) => {
					return restaurant.restaurant_uid !== id;
				})
			);
		} catch (err) {
			console.error(err);
		}
	};
	return (
		<div className='list-group'>
			<table className='table table-hover table-dark'>
				<thead>
					<tr className='bg-primary'>
						<th scope='col'>Restaurant</th>
						<th scope='col'>Location</th>
						<th scope='col'>Price Range</th>
						<th scope='col'>Ratings</th>
						<th scope='col'>Edit</th>
						<th scope='col'>Delete</th>
					</tr>
				</thead>
				<tbody>
					{restaurants &&
						restaurants.map((restaurant) => {
							return (
								<tr key={restaurant.restaurant_uid}>
									<td>{restaurant.name}</td>
									<td>{restaurant.address}</td>
									<td>{"$".repeat(restaurant.price_range)}</td>
									<td>Review</td>
									<td>
										<button className='btn btn-warning'>Update</button>
									</td>
									<td>
										<button onClick={() => handleDelete(restaurant.restaurant_uid)} className='btn btn-danger'>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					{/* <tr>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
						<td>@mdo</td>
						<td>
							<button className='btn btn-warning'>Update</button>
						</td>
						<td>
							<button className='btn btn-danger'>Delete</button>
						</td>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default RestaurantList;
