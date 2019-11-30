const express = require('express');

const itemController = require('../controller/deliveryItem');

const router = express.Router();


router.post("/", itemController.createItem);
router.get("/:id", itemController.getItem);
router.get("/", itemController.All);
router.put("/:id", itemController.updateItem);
router.delete("/:id", itemController.deleteItem);


// Expose the Router
module.exports = router;