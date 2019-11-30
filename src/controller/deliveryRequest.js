
const DeliveryRequest = require('../dal/deliveryRequest');
const Client = require('../dal/client');
const validate = require('../models/deliveryRequest');
const _ = require('lodash');



module.exports.createRequest =async (req, res)=> {
  const body = req.body;

   const {error}= validate(body);
   if(error) return res.status(404).json(error.details[0].message);
   let deliveryRequest =await DeliveryRequest.check({ requestedBy: body.requestedBy});
   if (deliveryRequest!=null && deliveryRequest.isAccepted==false ) return  res.status(400).json("Your delivery request  is under process");
   
     let client =await Client.getById(body.requestedBy);
   if (!client) return  res.status(400).json("Invalid Client Id");

   body.requestedBy= {  _id: client._id };

  deliveryRequest = await DeliveryRequest.create(body)
   res.status(200).json(_.pick(deliveryRequest,['_id']));
 };

exports.getRequest = async (req, res)=> {
        const deliveryRequest = await DeliveryRequest.getById(req.params.id);
        if (!deliveryRequest) return res.status(404).json("The item is not found!!!");
        res.json(deliveryRequest);
  };
 
// Get all of DeliveryRequests
exports.getAll = async (req, res)=> {
  let deliveryRequest = await DeliveryRequest.getAll();
  res.status(200).json(deliveryRequest);
}
  /**
 * Update a DeliveryRequest 
 * 
 * 
 */
exports.updateRequest = async (req, res)=> {
     const body  = req.body; 
     const {error}= validate(body);
     if(error) return res.status(404).json(error.details[0].message);
      let deliveryRequest = await  DeliveryRequest.update(req.params.id, body);
      res.status(200).json(deliveryRequest);
  };

  exports.deleteRequest = async (req, res)=>  {
      let deliveryRequest = await  DeliveryRequest.deleteById(req.params.id);
      res.status(200).json(deliveryRequest);
  };