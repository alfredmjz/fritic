import React from "react";
import "./styles/CountryFlag.css";
import { useState } from "react";

const CountryFlag = ({ countryList }) => {
	const [isToggle, setToggle] = useState(false);
	const [selected, setSelected] = useState(null);
	const [filter, setFilter] = useState("");

	const handleDropdown = () => {
		setToggle(!isToggle);
	};

	const handleSelected = (countryName) => {
		setToggle(!isToggle);
		setSelected(countryName);
	};

	const displayFlag = () => {
		if (!selected) {
			return (
				<div>
					<img className='flag-icon' src={countryList[0].flags.svg} />
					<span className='ms-1'>{countryList[0].idd.root}</span>
				</div>
			);
		} else {
			const selectedPlaceholder = countryList.find((country) => country.name.common === selected);
			setSelected(null);
			return (
				<div>
					<img className='flag-icon' src={selectedPlaceholder.flags.svg} />
					<span className='ms-1'>{selectedPlaceholder.idd.root}</span>
				</div>
			);
		}
	};

	//TODO: implement filtering
	const filterCountry = (e) => {
		e.stopPropagation();
		setFilter(e.target.value);
		if (filter !== "") {
			return countryList
				.filter((country) => country.name.toUpperCase().indexOf(filter.toUpperCase()) > -1)
				.map(() => {});
		}
	};

	let toggleDropdown = "custom-options ";
	if (isToggle) {
		toggleDropdown += "open";
	}

	return (
		<div onClick={handleDropdown} className='input-group-text select-wrapper'>
			<div className='select'>
				<div id='countryPlaceholder' className='select-trigger'>
					{displayFlag()}
				</div>
				<div className={toggleDropdown}>
					<div onClick={(e) => e.stopPropagation()} className='filterCountry'>
						<input onChange={(e) => filterCountry(e)} placeholder='Country' type='text' id='dropdown-filter' />
					</div>
					{countryList.map((country, index) => {
						return (
							<div onClick={() => handleSelected(country.name.common)} className='custom-option' key={index}>
								<img className='flag-icon' src={country.flags.svg} />
								<span className='ms-1'>{country.idd.root}</span>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default CountryFlag;
