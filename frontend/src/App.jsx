import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./router/Home";
import Restaurant from "./router/Restaurant";
import Update from "./router/Update";

const App = () => {
	return (
		<div className='container'>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/restaurant/:id/update' element={<Update />} />
					<Route exact path='/restaurant/:id' element={<Restaurant />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
