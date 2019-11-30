const express = require('express');
const auth = require('../middleware/auth');

const requestController = require('../controller/deliveryRequest');

const router = express.Router();


/**
 * @api {post} /deliveryrequests Create a new request
 * @apiGroup Delivery Request
 * @apiParam {String} deliveryRequests.deliveryItem DeliveryRequest deliveryItem
 * @apiParam {String} deliveryRequests.vehicleType DeliveryRequest vehicleType
 * @apiParam {String} deliveryRequests.requestedBy DeliveryRequest requestedBy
 * @apiParam {Coordinator} deliveryRequests.pickPoint DeliveryRequest pickPoint
 * @apiParam {Coordinator} deliveryRequests.dropPoint DeliveryRequest dropPoint
 * @apiParamExample {json} Input
 *    
 *  {
 * "deliveryItem": "furniture",
 * "requestedBy": "5dc1c855578bec3088f67f07",
 * "vehicleType": "Track",
 *  "pickPoint": {
 *  "coordinates": [
 * 9.0249999, 38.73666372 ],
 * "type": "Point"
 *  },
 * "dropPoint":
 *  {"coordinates": [
 *  8.97332944, 38.792996828
 * ],
 * "type": "Point"
        }
    }
 * @apiSuccess {String} deliveryRequests._id DeliveryRequest _id
 * @apiSuccess {String} deliveryRequests.deliveryItem DeliveryRequest deliveryItem
 * @apiSuccess {String} deliveryRequests.vehicleType DeliveryRequest vehicleType
 * @apiSuccess {String} deliveryRequests.requestedBy DeliveryRequest requestedBy
 * @apiSuccess {Coordinator} deliveryRequests.pickPoint DeliveryRequest pickPoint
 * @apiSuccess {Coordinator} deliveryRequests.dropPoint DeliveryRequest dropPoint
 * @apiSuccess {Date} dateModified Update date
 * @apiSuccess {Date} dateCreated Request date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *     "_id": "5dc2ab7980bc1e604812a783"
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post("/",auth, requestController.createRequest);
/**
 * @apiGroup Delivery Request 
 * @apiParam {id} id Delivery request id
 *    * @apiParamExample {json} Input
 *    {
 *      "_id": "5db5b7bdebad9934e883261c"
 *    }
 *  * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *[ {
 * "deliveryItem": "furniture",
 * "requestedBy": "5dc1c855578bec3088f67f07",
 * "vehicleType": "Track",
 *  "pickPoint": {
 *  "coordinates": [
 * 9.0249999, 38.73666372 ],
 * "type": "Point"
 *  },
 * "dropPoint":
 *  {"coordinates": [
 *  8.97332944, 38.792996828
 * ],
 * "type": "Point"
        }
    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get("/:id", requestController.getRequest);
/**
 * @api {get} /deliveryRequests List all Delivery Requests
 * @apiGroup Delivery Request
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *[ {
 * "deliveryItem": "furniture",
 * "requestedBy": "5dc1c855578bec3088f67f07",
 * "vehicleType": "Track",
 *  "pickPoint": {
 *  "coordinates": [
 * 9.0249999, 38.73666372 ],
 * "type": "Point"
 *  },
 * "dropPoint":
 *  {"coordinates": [
 *  8.97332944, 38.792996828
 * ],
 * "type": "Point"
        }
    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get("/", requestController.getAll);
/**
 * @api {put} /deliveryRequests/:id Update a Delivery Request
 * @apiGroup Delivery Request 
 * @apiParam {id} id Delivery request id
 * @apiParamExample {json} Input
{
 * "deliveryItem": "Electronics",
 * "requestedBy": "5db856b51e1970690817dde0"
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * [{
    "pickPoint": {
        "coordinates": [
            -104.0903,
            39.9302
        ],
        "type": "Point"
    },
    "dropPoint": {
        "coordinates": [
            -104.6903,
            39.4302
        ],
        "type": "Point"
    },
    "deliveryStatus": "pending",
    "isAccepted": false,
    "_id": "5db5b7bdebad9934e883261c",
    "deliveryItemId": "5db59b5866f687431c2269bb",
    "requestedBy": {
        "_id": "5db856b51e1970690817dde0",
        "firstName": "Zeleke"
    },
    "deliveryItem": "Electronics"
}]
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */
router.put("/:id",auth, requestController.updateRequest);
/**
 * @api {delete} /deliveryRequests/:id Remove a Delivery Request
 * @apiGroup Delivery Request
 * @apiParam {id} id Delivery Request id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */
router.delete("/:id", auth,requestController.deleteRequest);


// Expose the Router
module.exports = router;