const express = require('express');

const verifyController = require('../controller/verify');
const router = express.Router();



/**
 * @api {post} /verify Verify a new client
 * @apiGroup Clients
 * @apiParam {String}  countryCode client country code 
 * @apiParam {String}  phoneNumber client phone number 
 * @apiSuccess {String} clients.verificationCode Client verificationCode
 * @apiParamExample {json} Input
 *    {
 *     "countryCode": "+251", 
 *     "phoneNumber": "912317319",
 *     "verificationCode": "382212"
 * }
 * @apiSuccess {String} clients._id Client _id
 * @apiSuccess {String} clients.countryCode Client countryCode
 * @apiSuccess {String} clients.phoneNumber Client phoneNumber
 * @apiSuccess {Date} dateModified Update date
 * @apiSuccess {Date} dateCreated Verify client date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    { 
 *   
 *  "_id": "5dc1c855578bec3088f67f07",
 *    "phoneNumber": "912317319"
 *      }  
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post("/", verifyController.verifyClient);



// Expose the Router
module.exports = router;