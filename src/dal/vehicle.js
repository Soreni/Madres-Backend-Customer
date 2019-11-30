const Vehicle = require('../models/vehicle');


//create vehicle
const create = async function(vehicleData){  
    let vehicle = new Vehicle(vehicleData);
    await vehicle.save();
  
}

  /**
 * get a vehicle with given plateNumber from db .
 */
const check = async function (modelNumber) {
    let vehicle = await Vehicle.findOne(modelNumber);
    return vehicle;
  }
   
  /**
 * get a vehicle with given id from db .
 */
const getById = async function (_id) {

    let vehicle = await Vehicle.findById(_id);
    return vehicle;
  }
  /**
 * Fetch vehicles
 */
const getAll = async function() {
    let vehicle = await Vehicle.find();
    return vehicle;
  }
  
  /**
   * Update a vehicle
   */
const update = async function(query, vehicleData) {
    let vehicle = await Vehicle.findByIdAndUpdate(query, vehicleData,{new:true});
    return vehicle;
    
  }

    /**
   * Delete a vehicle type
   */
  const deleteById = async function(id) {
    let vehicle = await Vehicle.findOneAndRemove(id);
    return vehicle;
  }

  module.exports = {create, getAll, getById ,update,check,deleteById};
