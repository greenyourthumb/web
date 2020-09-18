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


	//Forums API
	getForums: function () {
		return axios.get("/api/forums");
	},
	getIForum: function (id) {
		return axios.get("/api/forums/" + id);
	},
	createForums: function (forumData) {
		return axios.post("/api/forums", forumData);
	},
	updateForum: function (id, forumData) {
		return axios.put("/api/forums/" + id, forumData);
	},
	deleteForum: function (id) {
		return axios.delete("/api/forums/" + id);
	},

	// Topics API
	getTopics: function () {
		return axios.get("/api/topics");
	},
	getTopic: function (id) {
		return axios.get("/api/topics/" + id);
	},
	createTopic: function (topicData) {
		console.log(topicData);
		return axios.post("/api/topics", topicData);
	},
	updateTopic: function (id, topicData) {
		return axios.put("/api/topics/" + id, topicData);
	},
	deleteTopic: function (id) {
		return axios.delete("/api/topics/" + id);
	},

	// Posts API
	getPosts: function () {
		return axios.get("/api/posts");
	},
	getPost: function (id) {
		return axios.get("/api/posts/" + id);
	},
	createPost: function (postData) {
		return axios.post("/api/posts", postData);
	},
	updatePost: function (id, postData) {
		return axios.put("/api/posts/" + id, postData);
	},
	deletePost: function (id) {
		return axios.delete("/api/posts/" + id);
	},

	//User API
	getUsers: function () {
		return axios.get("/api/user/all");
	},

	getUserProfile: function (userData) {
		return axios.get("/api/user/profile", userData);
	},

	getUser: function (userData) {
		return axios.get("/:id", userData);
	},

	updateUserProfile: function (userData) {
		return axios.put("/api/user/profile", userData);
	},

	getUserGrowList: function () {
		return axios.get("/api/growlist");
	},

	addGrowItem: function(userData) {
		return axios
				.post("/api/masterInventory/find", userData)
				.then((res) => {
					console.log(res.data);

					axios.post("/api/growlist" , res.data)
				})
	},

	getMyReminders: function () {
		return axios.get("/api/reminders");
	},

	addReminder: function(reminderData) {
		console.log(reminderData);
		return axios.post("/api/reminders", reminderData)
	},
	getMyAlerts: function() {
		return axios.get("/api/reminders/high");
	},

	getWeatherForecast: async function () {
		let results = []
		var temps = [];
		var winds = [];
		axios
    		.get('https://api.openweathermap.org/data/2.5/forecast?zip=75098,us&units=imperial&appid=166a433c57516f51dfab1f7edaed8413')
    		.then((res) => {
				var j = 0;
					while (j < 40) {
						var temp = res.data.list[j].main.temp;
						var wind = res.data.list[j].wind.speed;
						temps.push(temp);
						winds.push(wind)
						j = j + 8;
					}
					results.push({tempData: temps}, {windData: winds});
		});
		console.log(results);
		return results;
	}
};

