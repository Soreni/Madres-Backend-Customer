const Client = require('../models/client');


//create client
const create = async function(clientData){  

    let client = new Client(clientData);
    await client.save();
    
}

  /**
 * get a Client with given phonNumber from db .
 */
const check = async function (phoneNumber) {
    let client = await Client.findOne(phoneNumber);
    return client;
  }
   
  /**
 * get a Client with given id from db .
 */
const getById = async function (_id) {
    let client = await Client.findById(_id);
    return client;
  }
  /**
 * Fetch clients
 */
const getAll = async function() {
    let client = await Client.find();
    return client;
  }
  
  /**
   * Update a client
   */
const update = async function(query, clientData) {
    let client = await Client.findByIdAndUpdate(query, clientData,{new:true});
    return client;
    
  }

    /**
   * Delete a client
   */
  const deleteById = async function(id) {
    let client = await Client.findOneAndRemove(id,{new:true});
    return client;
  }

  module.exports = {create, getAll, getById ,update,deleteById,check};
