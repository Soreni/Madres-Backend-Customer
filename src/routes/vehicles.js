const express = require('express');

const vehicleController = require('../controller/vehicle');

const router = express.Router();


router.post("/", vehicleController.createVehicle);
router.get("/:id", vehicleController.getVehicle);
router.get("/", vehicleController.getAll);
router.put("/:id", vehicleController.updateVehicle);
router.delete("/:id", vehicleController.deleteVehicle);





// Expose the Router
module.exports = router;