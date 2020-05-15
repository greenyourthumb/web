const SeedCompanies = require("./SeedCompanies-Controller.js");
const Forums = require("./forumsController");
const Topics = require("./topicsController");
const Posts = require("./postsController");
const GrowList = require("./GrowListController");
const MasterInventory = require("./masterInventory");
const Reminders = require("./reminderController");

module.exports = {
	SeedCompanies, Forums, Topics, Posts, GrowList, MasterInventory, Reminders
};
