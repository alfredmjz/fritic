import axios from "axios";
const baseUrl = "https://restcountries.com/v3.1";

const getAll = async () => {
	const request = await axios.get(baseUrl + "/all");
	return request.data;
};

const getOne = async (name) => {
	const newUrl = baseUrl + `/name/${name}`;
	const request = await axios.get(newUrl);
	return request.data;
};

const toExport = { getOne, getAll };
export default toExport;
