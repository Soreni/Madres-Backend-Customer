const Driver = require('../models/driver');


module.exports.create = async function(data){  

    let driver = new Driver(data);
    await driver.save();
    
};

/**
 * get a Client with given phonNumber from db .
 */
module.exports.check = async function (phoneNumber) {
    let driver = await Driver.findOne(phoneNumber);
    return driver;
  };
   