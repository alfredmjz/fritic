import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RestaurantContextProvider } from "./context/RestaurantContext";
import Home from "./router/Home";
import Restaurant from "./router/Restaurant";
import Update from "./router/Update";
import Login from "./router/Login";

const App = () => {
	return (
		<RestaurantContextProvider>
			<div className='container'>
				<BrowserRouter>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/restaurant/:id/update' element={<Update />} />
						<Route exact path='/restaurant/:id' element={<Restaurant />} />
						<Route exact path='/fritic/users/login' element={<Login />} />
					</Routes>
				</BrowserRouter>
			</div>
		</RestaurantContextProvider>
	);
};

export default App;
