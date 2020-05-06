import axios from "axios";

export default {
	// Gets all resources/seed-companies
	getItems: function () {
		return axios.get("/api/resources/seed-companies");
	},
	// Gets the item with the given id
	getItem: function (id) {
		return axios.get("/api/resources/seed-companies/" + id);
	},
	updateItem: function (id, itemData) {
		return axios.put("/api/resources/seed-companies/" + id, itemData);
	},
	// Deletes the item with the given id
	deleteItem: function (id) {
		return axios.delete("/api/resources/seed-companies/" + id);
	},
	// Saves an item to the database
	saveItem: function (itemData) {
		return axios.post("/api/resources/seed-companies", itemData);
	},
};
