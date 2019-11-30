const express = require('express');
const auth = require('../middleware/auth');
const clientController = require('../controller/client');
const router = express.Router();



/**
 * @api {post} /clients Register a new client
 * @apiGroup Clients
 * @apiParam {String} clients.countryCode Client countryCode
 * @apiParam {String} clients.phoneNumber Client phoneNumber
 * @apiParam {String} clients.firstName Client firstName
 * @apiParam {String} clients.lastName Client lastName
 * @apiParamExample {json} Input
 *    {
 *      "countryCode": "+251",
        "phoneNumber": "912317319",
        "firstName": "Abebe",
        "lastName": "Abebu"
 *    }
 * @apiSuccess {String} clients._id Client _id
 * @apiSuccess {String} clients.phoneNumber Client phoneNumber
 * @apiSuccess {String} clients.firstName Client firstName
 * @apiSuccess {String} clients.lastName Client lastName
 * @apiSuccess {Date} dateCreated Update date
 * @apiSuccess {Date} dateModified Register date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *     "Successfully  Registered!"
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post("/register",auth, clientController.createClient);
/**
 * @api {get} /clients a client 
 * @apiGroup Clients
 * @apiParam {id} id Client id
 *  * @apiParamExample {json} Input
 *    {
 *      "_id": "5dc1c855578bec3088f67f07"
 *    }
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": "5dc1c855578bec3088f67f07",
        "countryCode": "+251",
        "phoneNumber": "912317319",
        "firstName": "Abebe",
        "lastName": "Abebu"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get("/:id", clientController.getClient);
/**
 * @api {get} /Clients List all clients
 * @apiGroup Clients
 * @apiSuccess {Object[]} clients Clients's list
 * @apiSuccess {String} clients._id Client _id
 * @apiSuccess {String} clients.phoneNumber Client phoneNumber
 * @apiSuccess {Boolean} clients.firstName Client firstName
 * @apiSuccess {Boolean} clients.lastName Client lastName

 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *        "_id": "5dc1c855578bec3088f67f07",
        "countryCode": "+251",
        "phoneNumber": "912317319",
        "firstName": "Abebe",
        "lastName": "Abebu"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get("/", clientController.getAll);
/**
 * @api {put} /Clients/:id Update a Client
 * @apiGroup Clients
 * @apiParam {id} id Client id
 * @apiParamExample {json} Input
 *    {
 *      "firstName": "Alem",
        "lastName": "Reda"
 *    }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * [{
    "_id": "5dc298c568527d13640d621c",
    "countryCode": "+251",
    "phoneNumber": "912317319",
    "firstName": "Alem",
    "lastName": "Reda"
}]
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */
router.put("/:id",auth, clientController.updateClient);
/**
 * @api {delete} /clients/:id Remove a Client
 * @apiGroup Clients
 * @apiParam {id} id Client id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */
router.delete("/:id", clientController.deleteClient);


// Expose the Router
module.exports = router;