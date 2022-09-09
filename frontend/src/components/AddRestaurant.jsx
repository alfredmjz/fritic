import React from "react";

export const AddRestaurant = () => {
	return (
		<div className='container text-center'>
			<form className='row' action=''>
				<div className='col'>
					<input type='text' placeholder='Name' className='form-control' />
				</div>
				<div className='col'>
					<input type='text' placeholder='Location' className='form-control' />
				</div>
				<div className='col-auto'>
					<select className='custom-select my-1 mr-sm-2'>
						<option disabled>Price Range</option>
						<option value='1'>$</option>
						<option value='2'>$$</option>
						<option value='3'>$$$</option>
						<option value='4'>$$$$</option>
						<option value='5'>$$$$$</option>
					</select>
				</div>
				<div className='col-auto'>
					<button className='btn btn-primary'>Add</button>
				</div>
			</form>
		</div>
	);
};
