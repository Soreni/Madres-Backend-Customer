const bcrypt = require('bcrypt');
const Joi = require('joi');
const Client = require('../dal/client');
const _= require('lodash');



module.exports.verifyClient =async (req, res,next)=> {
  const body = req.body;

   const {error}= validate(body);
   if(error) return res.status(404).json(error.details[0].message);
   try{
   let client =await Client.check({ phoneNumber: body.phoneNumber })
   if (!client) return  res.status(400).json(`Invalid Phone Number`);
   if (client.verified==true) return  res.json(`you already verified `);

      const validateCode = bcrypt.compare(req.body.verificationCode,client.verificationCode);
      if(!validateCode) return res.status(400).json("Invalid Verification Code");

   client.verified = true;
   await Client.update(client._id,client);
   const token = client.generateAuthToken();
  res.header('x-auth-token',token).status(200).json(_.pick(client,['_id','phoneNumber']));
  }
  catch(err){
    next(err);
  }
  
 };

function validate(req){
  const schema = {    
      countryCode: Joi.string().min(3).max(5).required(), 
      phoneNumber: Joi.string().min(3).max(50).required(), 
      verificationCode: Joi.string().min(3).max(50).required() 
      }
      return Joi.validate(req,schema);
}