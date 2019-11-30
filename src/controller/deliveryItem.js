
const DeliveryItem = require('../dal/deliveryItem');
const validate = require('../models/deliveryItem')



module.exports.createItem =async (req, res)=> {
  const body = req.body;
   const {error}= validate(body);
   if(error) return res.status(404).json(error.details[0].message);
   let deliveryItem =await DeliveryItem.check({ tag: body.tag })
    if (deliveryItem) return  res.status(400).json(`Item is already registered under ${body.tag} tag`);
    await DeliveryItem.create(body);
   res.status(200).json("Successfully  Registered!");  
 };
//get item by _id from db
exports.getItem = async (req, res)=> {      
        const deliveryItem = await DeliveryItem.getById( req.params.id);
        if (!deliveryItem) return res.status(404).json("Item not found!!!");
        res.json(deliveryItem);

  };

  
// Get all  DeliveryItems
exports.All = async (req, res)=> {
   let deliveryItem = await DeliveryItem.getAll();
  res.status(200).json(deliveryItem);

}
  /**
 * Update a DeliveryItem 
 * 
 * 
 */
exports.updateItem = async (req, res)=> {
     const body  = req.body; 
     const {error}= validate(body);
     if(error) return res.status(404).json(error.details[0].message);
      let deliveryItem = await  DeliveryItem.update(req.params.id, body);
      res.status(200).json(deliveryItem);
     
  };

  exports.deleteItem = async (req, res)=>  {
      let deliveryItem = await  DeliveryItem.deleteById(req.params.id);
      res.status(200).json(deliveryItem);
  };

 