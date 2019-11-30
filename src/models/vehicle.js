const mongoose = require('mongoose');
const Joi = require('joi');




const vehicleSchema = new mongoose.Schema({
 
    vehicleType: {
        type: String,
        required: true,
        minlength:3,
        maxlength:50
    },
    modelNumber: {
        type: String,
        required: true,
        unique:true,
        minlength:3,
        maxlength:50
    },
    vehicleSize:{
        type: String,
        required: true,
        minlength:3,
        maxlength:50
    },
    dateCreated:{
    
        type:Date,
        default:Date.now
    },
    dateModified:{
    
        type:Date,
        default:Date.now
    }   
    });

const Vehicle = mongoose.model('Vehicle',vehicleSchema);

function validateVehicle(vehicle){
    const schema = {
        vehicleType: Joi.string().min(3).max(50).required(),
        modelNumber: Joi.string().min(3).max(50).required(), 
        vehicleSize: Joi.string().min(3).max(50).required()
      
        }
        return Joi.validate(vehicle,schema);
}

module.exports = Vehicle;
exports.validate = validateVehicle;