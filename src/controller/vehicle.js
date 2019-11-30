const Vehicle = require('../dal/vehicle');
const validate = require('../models/vehicle')



module.exports.createVehicle =async (req, res)=> {
   const body = req.body;
   const {error}= validate(body);
   if(error) return res.status(404).json(error.details[0].message);
   let vehicle = await Vehicle.check({ modelNumber: body.modelNumber });
   if (vehicle) return  res.status(400).json(`Vehicle is already registered under ${body.modelNumber} model number`);
   await Vehicle.create(body);
   res.status(200).json("Successfully  Registered!"); 

 };

exports.getVehicle = async (req, res)=> {
        const vehicle = await Vehicle.getById(req.params.id);
        if (!vehicle) return res.status(404).json("The Vehicle is not found!!!");
        res.json(vehicle);      
  };

  
// Get all of vehicle
exports.getAll = async (req, res)=> {
  let vehicle = await Vehicle.getAll();
  res.status(200).json(vehicle);
}
  /**
 * Update a VehicleType 
 * 
 * 
 */
exports.updateVehicle = async (req, res)=> {
     const body  = req.body; 
     const {error}= validate(body);
     if(error) return res.status(404).json(error.details[0].message);
      let vehicle = await  Vehicle.update(req.params.id, body);
      res.status(200).json(vehicle);

  };

  /**
 * delete a VehicleType 
 * 
 * 
 */
  exports.deleteVehicle = async (req, res)=>  {
      let vehicle = await  Vehicle.deleteById(req.params.id);
      res.status(200).json(vehicle);

  };