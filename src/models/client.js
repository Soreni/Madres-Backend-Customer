const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const Joi = require('joi');
const config = require('../config/key');



const clientSchema = new mongoose.Schema({
 
    countryCode: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        unique:true,
        required: true,
    },
    firstName:{
        type: String,
        required: false,
        minlength:3,
        maxlength:50
    },
    lastName:{
        type: String,
        required: false,
        minlength:3,
        maxlength:50
    },
    verificationCode:String,
    verified: {
        type: Boolean,
        default: false,
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

    clientSchema.methods.generateAuthToken = function(){
            return jwt.sign(
                { _id: this._id},
                config.JWT_KEY);
        };

const Client = mongoose.model('Client',clientSchema);

function validateClient(client){
    const schema = {
        countryCode: Joi.string().min(3).max(5).required(),
        phoneNumber: Joi.string().min(9).max(14).required(),  
        firstName: Joi.string().min(3).max(50),
        lastName: Joi.string().min(3).max(50),
        verificationCode:Joi.string().min(3).max(50)
        }
        return Joi.validate(client,schema);
}

module.exports = Client;
exports.validate = validateClient;