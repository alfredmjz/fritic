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

	const filterCountry = (e) => {
		e.stopPropagation();
		setFilter(e.target.value);
	};

	const displayFlag = () => {
		if (!selected) {
			return (
				<div>
					<img className='flag-icon' src={countryList[0].flags.svg} />
					<span className='ms-1'>{countryList[0].idd.root}</span>
				</div>
			);
		}
		const selectedPlaceholder = countryList.find((country) => country.name.common === selected);
		return (
			<div>
				<img className='flag-icon' src={selectedPlaceholder.flags.svg} />
				<span className='ms-1'>{selectedPlaceholder.idd.root}</span>
			</div>
		);
	};

	const displayFiltered = () => {
		if (filter !== "") {
			return countryList
				.filter((country) => country.name.common.toUpperCase().indexOf(filter.toUpperCase()) > -1)
				.map((country, index) => (
					<div onClick={() => handleSelected(country.name.common)} className='custom-option' key={index}>
						<img className='flag-icon' src={country.flags.svg} />
						<span className='ms-1'>{country.idd.root}</span>
					</div>
				));
		}

		return countryList.map((country, index) => (
			<div onClick={() => handleSelected(country.name.common)} className='custom-option' key={index}>
				<img className='flag-icon' src={country.flags.svg} />
				<span className='ms-1'>{country.idd.root}</span>
			</div>
		));
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
					{displayFiltered(filter)}
				</div>
			</div>
		</div>
	);
};

export default CountryFlag;
