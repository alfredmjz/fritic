import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import oishee from "../api/oishee";
import { RestaurantContext } from "../context/RestaurantContext";

const RestaurantList = (props) => {
	const { restaurants, setRestaurants } = useContext(RestaurantContext);
	const navigate = useNavigate();
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

	const handleUpdate = async (e, id) => {
		e.stopPropagation();

		try {
			navigate(`/restaurant/${id}/update`);
		} catch (err) {
			console.error(err);
		}
	};
	const handleDelete = async (e, id) => {
		e.stopPropagation();

		try {
			await oishee.remove(id);
			setRestaurants(
				restaurants.filter((restaurant) => {
					return restaurant.uuid !== id;
				})
			);
		} catch (err) {
			console.error(err);
		}
	};

	const handleSelected = async (id) => {
		navigate(`/restaurant/${id}`);
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
							console.log(restaurant);
							return (
								<tr onClick={() => handleSelected(restaurant.uuid)} key={restaurant.uuid}>
									<td>{restaurant.name}</td>
									<td>{restaurant.address}</td>
									<td>{"$".repeat(restaurant.price_range)}</td>
									<td>Review</td>
									<td>
										<button onClick={(e) => handleUpdate(e, restaurant.uuid)} className='btn btn-warning'>
											Update
										</button>
									</td>
									<td>
										<button onClick={(e) => handleDelete(e, restaurant.uuid)} className='btn btn-danger'>
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
