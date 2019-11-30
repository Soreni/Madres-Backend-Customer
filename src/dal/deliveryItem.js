const DeliveryItem = require('../models/deliveryItem');


//create client
const create = async function(deliveryItemData){  
      let deliveryItem = new DeliveryItem(deliveryItemData);
    await deliveryItem.save();
 
}

 /**
 * get a DeliveryItem with given phoneNumber from db .
 */
const check = async function (tag) {
    let deliveryItem = await DeliveryItem.findOne(tag);
    return deliveryItem;
  }
   
  /**
 * get a DeliveryItem with given id from db .
 */
const getById = async function (id) {
    let deliveryItem = await DeliveryItem.findById(id);
    return deliveryItem;
  }
  /**
 * Fetch DeliveryItems
 */
const getAll = async function() {
    let deliveryItem = await DeliveryItem.find();
    return deliveryItem;
  }
  
  /**
   * Update a client
   */
const update = async function(query, deliveryItemData) {
    let deliveryItem = await DeliveryItem.findByIdAndUpdate(query, deliveryItemData,{new:true});
    return deliveryItem;
  }
 
    

    /**
   * Delete a client
   */
 const deleteById = async function(id) {
    let deliveryItem = await DeliveryItem.findOneAndRemove(id);
    return deliveryItem;
  }

  module.exports = {create, getAll, getById ,update,deleteById,check};
