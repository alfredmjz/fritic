import React from "react";
import { useState } from "react";
import { AddRestaurant } from "../components/AddRestaurant";
import { Header } from "../components/Header";
import RestaurantList from "../components/RestaurantList";

const Home = () => {
	const [user, setUser] = useState(null);
	return (
		<div>
			<Header user={user} setUser={setUser} />
			<AddRestaurant />
			<RestaurantList />
		</div>
	);
};

export default Home;
