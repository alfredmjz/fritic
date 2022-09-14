const restaurantRouter = require("express").Router();
const db = require("../database/index.js");

//Get all restaurants
restaurantRouter.get("/", async (req, res, next) => {
	try {
		const results = await db.query(
			"SELECT uuid, * FROM restaurant LEFT JOIN " +
				"(SELECT restaurant_uuid, COUNT(*), TRUNC(AVG(ratings), 1) AS average_rating " +
				"FROM review GROUP BY restaurant_uuid) review ON restaurant.uuid = review.restaurant_uuid;"
		);

		res.status(200).json({
			status: "success",
			results: results.rowCount,
			data: {
				restaurant: results.rows,
			},
		});
	} catch (err) {
		next(err);
	}
});

//Get one restaurant
restaurantRouter.get("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const restaurants = await db.query(
			"SELECT * FROM restaurant LEFT JOIN " +
				"(SELECT restaurant_uuid, COUNT(*), TRUNC(AVG(ratings), 1) AS average_rating " +
				"FROM review GROUP BY restaurant_uuid) review ON " +
				"restaurant.restaurant_uuid = review.restaurant_uuid WHERE uuid = $1;",
			[id]
		);
		const reviews = await db.query("SELECT * FROM review WHERE restaurant_uuid = $1", [id]);

		res.status(200).json({
			status: "success",
			data: {
				restaurant: restaurants.rows[0],
				review: reviews.rows,
			},
		});
	} catch (err) {
		next(err);
	}
});

//Create a restaurant
restaurantRouter.post("/", async (req, res, next) => {
	try {
		const { name, cuisine, address, price_range } = req.body;
		const results = await db.query(
			"INSERT INTO restaurant (uuid, name, cuisine, address, price_range) VALUES (uuid_generate_v4(), $1, $2, $3, $4) RETURNING *",
			[name, cuisine, address, price_range]
		);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

//Update a restaurant
restaurantRouter.put("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const { name, cuisine, address, price_range } = req.body;
		const results = await db.query(
			"UPDATE restaurant SET name = $1, cuisine = $2, address = $3, price_range = $4 WHERE uuid = $5 RETURNING *",
			[name, cuisine, address, price_range, id]
		);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

//Delete a restaurant
restaurantRouter.delete("/:id", async (req, res, next) => {
	try {
		const id = req.params.id;
		const results = await db.query("DELETE FROM restaurant WHERE uuid = $1", [id]);
		res.status(200).json({
			status: "success",
			data: {
				restaurant: results.rows[0],
			},
		});
	} catch (err) {
		next(err);
	}
});

//Add review
restaurantRouter.post("/:id/addreview", async (req, res, next) => {
	try {
		const id = req.params.id;
		const { name, content, ratings } = req.body;
		const newReview = await db.query(
			"INSERT INTO review(uuid, restaurant_uuid, name, content, ratings) VALUES (uuid_generate_v4(), $1, $2, $3, $4) RETURNING *;",
			[id, name, content, ratings]
		);
		res.status(201).json({
			status: "success",
			data: {
				review: newReview.rows[0],
			},
		});
	} catch (err) {
		console.error(err);
	}
});

module.exports = restaurantRouter;
