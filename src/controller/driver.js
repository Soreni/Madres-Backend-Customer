const Driver = require('../dal/driver');



module.exports.createDriver =async (req, res,next)=> {
    const body = req.body;

    let driver =await Driver.check({ phoneNumber: body.phoneNumber })
    if (driver) return  res.status(400).json('Driver is already registered');
     try{
     await Driver.create(body);
     res.status(200).json("Successfully  Registered!");
    }
    catch(err){
      next(err);
    }
    
   };
  