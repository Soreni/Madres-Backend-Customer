const Client = require('../dal/client');
const validate = require('../models/client');
const _ = require('lodash');




module.exports.createClient =async (req, res)=> {
  const body = req.body;

   const {error}= validate(body);
   if(error) return res.status(404).json(error.details[0].message);
    
   let client =await Client.check({ phoneNumber: body.phoneNumber })
   if (!client) return  res.status(400).json('Invalid Client');
   await Client.update(client._id,body);
   res.status(200).json("Successfully  Registered!");
 };

exports.getClient = async (req, res)=> {
        const client = await Client.getById(req.params.id);
        if (!client) return res.status(404).json("The client is not found!!!");
        res.status(200).json(_.pick(client,['_id','countryCode','phoneNumber','firstName','lastName']));
        
  };

  
// Get all of Clients
exports.getAll = async (req, res)=> {
  let client = await Client.getAll();
  res.status(200).json(_.map(client,_.partialRight(_.pick,['_id','countryCode','phoneNumber','firstName','lastName'])))

}
  /**
 * Update a Client 
 * 
 * 
 */
exports.updateClient = async (req, res)=> {
     const body  = req.body; 
     const {error}= validate(body);
     if(error) return res.status(404).json(error.details[0].message);
      let client = await  Client.update({ _id: req.params.id }, body);
      res.status(200).json(_.pick(client,['_id','countryCode','phoneNumber','firstName','lastName']));
  };

  exports.deleteClient = async (req, res)=>  {    
        let client = await  Client.deleteById(req.params.id);
        res.status(200).json(_.pick(client,['_id','countryCode','phoneNumber','firstName','lastName']));

  };