const mongoose = require('mongoose');
const Joi = require('joi');
const Driver = require('./driver');
const Client = require('./client');
const config = require('../config/key');




const deliveryRequestSchema = new mongoose.Schema({
 
    deliveryStatus: {
        type: String,
        required:true,
        default: config.DEL_STATUS,
        minlength: 4,
        maxlength: 50, 
    },
    deliveryItem: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50, 
    },
    requestedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Client
    },
    vehicleType:{
      type: String,
      minlength: 3,
      maxlength: 50,
  }, 
    deliveredBy:{
      type: mongoose.Schema.Types.ObjectId,
      ref: Driver
  }, 
    isAccepted: {
    type: Boolean,
    default: false,
   },
    pickPoint: { 
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number], 
          required: true
        }},
      dropPoint:{ 
        type: {
          type: String,
          enum: ['Point'],
          required: true
        },
        coordinates: {
          type: [Number], 
          required: true
        }},
    dateCreated:{
    
        type:Date,
        default:Date.now.Date
    },
    dateModified:{
    
        type:Date,
        default:Date.now
    }   
    });

const DeliveryRequest = mongoose.model('DeliveryRequest',deliveryRequestSchema);

function validateDeliveryRequest(deliveryRequest){
    const schema = {
        deliveryStatus: Joi.string().min(4).max(50).required(),
        requestedBy: Joi.string().min(10).max(255).required(),
        vehicleType: Joi.string().min(3).max(50).required(),
        deliveryItem: Joi.string().min(3).max(50).required(),
        isAccepted: Joi.boolean(),
        pickPoint: Joi.coordinates().required(),
        dropPoint: Joi.coordinates().required(),
      
        }
        return Joi.validate(deliveryRequest,schema);
}

module.exports = DeliveryRequest;
exports.validate = validateDeliveryRequest;