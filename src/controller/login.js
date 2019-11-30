const bcrypt = require('bcrypt');
const Joi = require('joi');
const config = require('../config/key')
const Client = require('../dal/client');
const generateCode = require('../lib/generatedCode');
const TeleSignSDK = require('telesignsdk');


const floor = 111111;
const ceiling = 999999;

const _client = new TeleSignSDK( config.CUSTOMER_ID,
  config.API_KEY,
  config.REST_ENDPOINT,
  config.TIMEOUT // optional
  // userAgent
)



module.exports.createClient =async (req, res)=> {
  const body = req.body;

   const {error}= validate(body);
   if(error) return res.status(404).json(error.details[0].message);
   let client =await Client.check({ phoneNumber: body.phoneNumber })
   if (client) return  res.status(400).json(`Phone Number ${body.phoneNumber} is already registered`);

   const verCode= generateCode(floor,ceiling).toString();
   const salt = await bcrypt.genSalt();
   console.log("ver code",verCode);
   body.verificationCode = await bcrypt.hash(verCode, salt);
   await Client.create(body);
   _client.sms.message(messageCallback, `${body.countryCode + body.phoneNumber}`, `Your Madres verification code is ${verCode}`, config.MESSAGE_TYPE);
   res.status(200).json("Verification code sent to your phone");
  
 };


function validate(req){
  const schema = {
      countryCode: Joi.string().min(3).max(5).required(),
      phoneNumber: Joi.string().min(9).max(14).required()
      }
      return Joi.validate(req,schema);
};

function messageCallback(error, responseBody,phoneNumber) {
  if (error === null) {
      console.log(`Messaging response for messaging phone number` +
          ` => code: ${responseBody['status']['code']}` +
          `, description: ${responseBody['status']['description']}`);
  } else {
      console.error("Unable to send message. " + error);
  }
};
