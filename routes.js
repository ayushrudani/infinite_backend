// routes.js
const express = require("express");
const router = express.Router();

// Import the Basic_DataController
const Basic_DataController = require("./controllers/Basic_DataController");

// Define the routes

// GET /basic-data
// Returns the paginated list of basic data
router.get("/basic-data", Basic_DataController.getBasicData);

module.exports = router;
