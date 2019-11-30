const express = require('express');

const loginController = require('../controller/login');
const router = express.Router();


/**
 * @api {post} /logins Auth a new client
 * @apiGroup Clients
 * @apiParam {String}  countryCode client country code 
 * @apiParam {String}  phoneNumber client phone number 
 * @apiParamExample {json} Input
 *    {
	"countryCode": "+251",
    "phoneNumber": "912317319"
  }
 * @apiSuccess {String} clients._id Client _id
 * @apiSuccess {String} clients.countryCode Client countryCode
 * @apiSuccess {String} clients.phoneNumber Client phoneNumber
 * @apiSuccess {Date} dateModified Update date
 * @apiSuccess {Date} dateCreated_at Register date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *     ""Verification code sent to your phone"
 *    }
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */

router.post("/", loginController.createClient);



// Expose the Router
module.exports = router;