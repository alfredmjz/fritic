import axios from "axios";
const baseUrl = "http://localhost:3001/api/v1/restaurants";

const getAll = async () => {
	const request = await axios.get(baseUrl);
	return request.data;
};

const getOne = async (id) => {
	const newUrl = baseUrl + `/${id}`;
	const request = await axios.get(newUrl);
	return request.data;
};
const createRestaurant = async (newObject) => {
	const request = await axios.post(baseUrl, newObject);
	return request.data;
};

const createReview = async (id, newObject) => {
	const newUrl = baseUrl + `/${id}/addreview`;
	const request = await axios.post(newUrl, newObject);
	return request.data;
};
const update = async (id, newObject) => {
	const newUrl = baseUrl + `/${id}`;
	const request = await axios.put(newUrl, newObject);
	return request.data;
};

const remove = async (id) => {
	const newUrl = baseUrl + `/${id}`;
	const request = await axios.delete(newUrl);
	return request.data;
};

const toExport = { getOne, getAll, createRestaurant, createReview, update, remove };
export default toExport;
