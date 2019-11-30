const mongoose = require('mongoose');
const Joi = require('joi');




const deliveryItemSchema = new mongoose.Schema({
    itemType: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50,
    },
    tag:{
        type:String,
        unique:true,
        minlength: 3,
        maxlength: 50,
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

const DeliveryItem = mongoose.model('DeliveryItem',deliveryItemSchema);

function validateDeliveryItem(deliveryItem){
    const schema = {
        itemType: Joi.string().min(3).max(50).required(),
        tag: Joi.string().min(3).max(50).required().unique()     
        }
        return Joi.validate(deliveryItem,schema);
}

module.exports = DeliveryItem;
exports.validate = validateDeliveryItem;