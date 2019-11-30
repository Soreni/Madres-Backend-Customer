const mongoose = require('mongoose');
const Joi = require('joi');


const Schema = mongoose.Schema;

const driverSchema = Schema({
    firstName: { type: String},
    lastName: { type: String },
    phoneNumber: { type: Number, required: true },
    vehicleTypeId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Vehicle"
        },
    plateNumber:String,


        addressLineOne:String,
        addressLineTwo:String,
        emailAdress:String,
        city:String,
        subCity:String ,   


        accountStatus:{type:String,
            enum: ["active", "inactive"],
            default: "inactive"
        },
        availabilityStatus:{
            type:String,
            enum:["active", "inactive"],
            default:"active"
        },
        verificationCode: { type: Number, required: false, min: 10000, max: 99999 }
 

});

    





module.exports = mongoose.model('Driver', driverSchema);

 