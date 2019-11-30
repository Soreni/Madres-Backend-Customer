module.exports = {
    //Token Id
    JWT_KEY: process.env.JWT_KEY || "madres_jwtprivatekey",
    // HTTP PORT
    PORT: process.env.HTTP_PORT || 6000,
    // MongoDB URL
    MongoURI: process.env.MongoURI || "mongodb://127.0.0.1:27017/madresDb",
   //TELESIGN
    CUSTOMER_ID:"EC6AC8D5-7A11-4B3D-AFD0-A77D349DBE00",
    API_KEY:"FG15jLTwGkMNLpno0b3qMwk951MKYEBMX6MyWOXfGIcqEuC4U63w4HnkSvXo38AfGeSxiPIfDGjC+n61k3jzFQ==",
    REST_ENDPOINT: "https://rest-api.telesign.com",
    MESSAGE_TYPE : 'ARN',
  
   // default value for status
   DEL_STATUS: "INPEOCESS",
   

  };
  