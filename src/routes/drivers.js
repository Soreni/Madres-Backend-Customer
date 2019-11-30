
const express = require('express');

const driverController = require('../controller/driver');

const router = express.Router();





router.post("/", driverController.createDriver);


// Expose the Router
module.exports = router;