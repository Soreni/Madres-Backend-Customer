const DeliveryRequest = require('../models/deliveryRequest');



//create client
const create = async function(DeliveryRequestData){  
    let deliveryRequest = new DeliveryRequest(DeliveryRequestData);
    deliveryRequest= await deliveryRequest.save();
    return deliveryRequest;
}

	 /**
 * get a DeliveryRequest with given requestedby, pickPoint,dropPoint from db .
 */
const check = async function (requestedBy) {
  console.log(requestedBy)
  let deliveryRequest = await DeliveryRequest.findOne(requestedBy);
  console.log(deliveryRequest)
  return deliveryRequest;
}

 

  /**
 * get a DeliveryRequest with given id from db .
 */
const getById = async function (_id) {
    let deliveryRequest = await DeliveryRequest.findById(_id)
                                .populate('requestedBy','firstName')
                                .populate('deliveredBy','firstName plateNumber phoneNumber')
                                .select('-__v -dateCreated -dateModified');;
    return deliveryRequest;
  }

     
  /**
 * get near by geo  DeliveryRequest  from db .
 */
const getByGeo = async function (pickPoint) {
    let deliveryRequest = await DeliveryRequest.findById(pickPoint);
    return deliveryRequest;
  }
  /**



  /**
 * Fetch DeliveryRequests
 */
const getAll = async function() {
    let deliveryRequest = await DeliveryRequest.find()
                          .populate('requestedBy','firstName')
                          .populate('deliveredBy','firstName plateNumber phoneNumber')
                          .select('-__v -dateCreated -dateModified');
                         
  
    return deliveryRequest;
  }
  
  /**
   * Update a client
   */
const update = async function(query, DeliveryRequestData) {
 
    let deliveryRequest = await DeliveryRequest.findByIdAndUpdate(query, DeliveryRequestData,{new:true})
                                              .populate('requestedBy','firstName')
                                              .populate('deliveredBy','firstName plateNumber phoneNumber')
                                              .select('-__v -dateCreated -dateModified');
    return deliveryRequest;
    
  }

    /**
   * Delete a client
   */
  const deleteById = async function(id) {
    let deliveryRequest = await DeliveryRequest.findOneAndRemove(id,{new:true});
    return deliveryRequest;
  }

  module.exports = {create, getAll, getById ,update,deleteById,check};
