define({ "api": [
  {
    "type": "delete",
    "url": "/clients/:id",
    "title": "Remove a Client",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Client id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clients.js",
    "groupTitle": "Clients",
    "name": "DeleteClientsId"
  },
  {
    "type": "get",
    "url": "/Clients",
    "title": "List all clients",
    "group": "Clients",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "clients",
            "description": "<p>Clients's list</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients._id",
            "description": "<p>Client _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.phoneNumber",
            "description": "<p>Client phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "clients.firstName",
            "description": "<p>Client firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "clients.lastName",
            "description": "<p>Client lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5dc1c855578bec3088f67f07\",\n     \"countryCode\": \"+251\",\n     \"phoneNumber\": \"912317319\",\n     \"firstName\": \"Abebe\",\n     \"lastName\": \"Abebu\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clients.js",
    "groupTitle": "Clients",
    "name": "GetClients"
  },
  {
    "type": "get",
    "url": "/clients",
    "title": "a client",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Client id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"_id\": \"5dc1c855578bec3088f67f07\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\": \"5dc1c855578bec3088f67f07\",\n     \"countryCode\": \"+251\",\n     \"phoneNumber\": \"912317319\",\n     \"firstName\": \"Abebe\",\n     \"lastName\": \"Abebu\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clients.js",
    "groupTitle": "Clients",
    "name": "GetClients"
  },
  {
    "type": "post",
    "url": "/clients",
    "title": "Register a new client",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clients.countryCode",
            "description": "<p>Client countryCode</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clients.phoneNumber",
            "description": "<p>Client phoneNumber</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clients.firstName",
            "description": "<p>Client firstName</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clients.lastName",
            "description": "<p>Client lastName</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"countryCode\": \"+251\",\n     \"phoneNumber\": \"912317319\",\n     \"firstName\": \"Abebe\",\n     \"lastName\": \"Abebu\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients._id",
            "description": "<p>Client _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.phoneNumber",
            "description": "<p>Client phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.firstName",
            "description": "<p>Client firstName</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.lastName",
            "description": "<p>Client lastName</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateCreated",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateModified",
            "description": "<p>Register date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n \"Successfully  Registered!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clients.js",
    "groupTitle": "Clients",
    "name": "PostClients"
  },
  {
    "type": "post",
    "url": "/logins",
    "title": "Auth a new client",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>client country code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>client phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "   {\n\t\"countryCode\": \"+251\",\n    \"phoneNumber\": \"912317319\"\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients._id",
            "description": "<p>Client _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.countryCode",
            "description": "<p>Client countryCode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.phoneNumber",
            "description": "<p>Client phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateModified",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateCreated_at",
            "description": "<p>Register date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n \"\"Verification code sent to your phone\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/login.js",
    "groupTitle": "Clients",
    "name": "PostLogins"
  },
  {
    "type": "post",
    "url": "/verify",
    "title": "Verify a new client",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "countryCode",
            "description": "<p>client country code</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phoneNumber",
            "description": "<p>client phone number</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "   {\n    \"countryCode\": \"+251\", \n    \"phoneNumber\": \"912317319\",\n    \"verificationCode\": \"382212\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.verificationCode",
            "description": "<p>Client verificationCode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients._id",
            "description": "<p>Client _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.countryCode",
            "description": "<p>Client countryCode</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "clients.phoneNumber",
            "description": "<p>Client phoneNumber</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateModified",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateCreated",
            "description": "<p>Verify client date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "  HTTP/1.1 200 OK\n  { \n \n\"_id\": \"5dc1c855578bec3088f67f07\",\n  \"phoneNumber\": \"912317319\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/verify.js",
    "groupTitle": "Clients",
    "name": "PostVerify"
  },
  {
    "type": "put",
    "url": "/Clients/:id",
    "title": "Update a Client",
    "group": "Clients",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Client id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"firstName\": \"Alem\",\n     \"lastName\": \"Reda\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"_id\": \"5dc298c568527d13640d621c\",\n    \"countryCode\": \"+251\",\n    \"phoneNumber\": \"912317319\",\n    \"firstName\": \"Alem\",\n    \"lastName\": \"Reda\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/clients.js",
    "groupTitle": "Clients",
    "name": "PutClientsId"
  },
  {
    "group": "Delivery_Request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Delivery request id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"_id\": \"5db5b7bdebad9934e883261c\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[ {\n\"deliveryItem\": \"furniture\",\n\"requestedBy\": \"5dc1c855578bec3088f67f07\",\n\"vehicleType\": \"Track\",\n \"pickPoint\": {\n \"coordinates\": [\n9.0249999, 38.73666372 ],\n\"type\": \"Point\"\n },\n\"dropPoint\":\n {\"coordinates\": [\n 8.97332944, 38.792996828\n],\n\"type\": \"Point\"\n        }\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/routes/deliveryRequests.js",
    "groupTitle": "Delivery_Request",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/deliveryRequests/:id",
    "title": "Remove a Delivery Request",
    "group": "Delivery_Request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Delivery Request id</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Delete error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/deliveryRequests.js",
    "groupTitle": "Delivery_Request",
    "name": "DeleteDeliveryrequestsId"
  },
  {
    "type": "get",
    "url": "/deliveryRequests",
    "title": "List all Delivery Requests",
    "group": "Delivery_Request",
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n[ {\n\"deliveryItem\": \"furniture\",\n\"requestedBy\": \"5dc1c855578bec3088f67f07\",\n\"vehicleType\": \"Track\",\n \"pickPoint\": {\n \"coordinates\": [\n9.0249999, 38.73666372 ],\n\"type\": \"Point\"\n },\n\"dropPoint\":\n {\"coordinates\": [\n 8.97332944, 38.792996828\n],\n\"type\": \"Point\"\n        }\n    }]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "List error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/deliveryRequests.js",
    "groupTitle": "Delivery_Request",
    "name": "GetDeliveryrequests"
  },
  {
    "type": "post",
    "url": "/deliveryrequests",
    "title": "Create a new request",
    "group": "Delivery_Request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryRequests.deliveryItem",
            "description": "<p>DeliveryRequest deliveryItem</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryRequests.vehicleType",
            "description": "<p>DeliveryRequest vehicleType</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "deliveryRequests.requestedBy",
            "description": "<p>DeliveryRequest requestedBy</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinator",
            "optional": false,
            "field": "deliveryRequests.pickPoint",
            "description": "<p>DeliveryRequest pickPoint</p>"
          },
          {
            "group": "Parameter",
            "type": "Coordinator",
            "optional": false,
            "field": "deliveryRequests.dropPoint",
            "description": "<p>DeliveryRequest dropPoint</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "   \n {\n\"deliveryItem\": \"furniture\",\n\"requestedBy\": \"5dc1c855578bec3088f67f07\",\n\"vehicleType\": \"Track\",\n \"pickPoint\": {\n \"coordinates\": [\n9.0249999, 38.73666372 ],\n\"type\": \"Point\"\n },\n\"dropPoint\":\n {\"coordinates\": [\n 8.97332944, 38.792996828\n],\n\"type\": \"Point\"\n        }\n    }",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deliveryRequests._id",
            "description": "<p>DeliveryRequest _id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deliveryRequests.deliveryItem",
            "description": "<p>DeliveryRequest deliveryItem</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deliveryRequests.vehicleType",
            "description": "<p>DeliveryRequest vehicleType</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deliveryRequests.requestedBy",
            "description": "<p>DeliveryRequest requestedBy</p>"
          },
          {
            "group": "Success 200",
            "type": "Coordinator",
            "optional": false,
            "field": "deliveryRequests.pickPoint",
            "description": "<p>DeliveryRequest pickPoint</p>"
          },
          {
            "group": "Success 200",
            "type": "Coordinator",
            "optional": false,
            "field": "deliveryRequests.dropPoint",
            "description": "<p>DeliveryRequest dropPoint</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateModified",
            "description": "<p>Update date</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "dateCreated",
            "description": "<p>Request date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n \"_id\": \"5dc2ab7980bc1e604812a783\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Register error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/deliveryRequests.js",
    "groupTitle": "Delivery_Request",
    "name": "PostDeliveryrequests"
  },
  {
    "type": "put",
    "url": "/deliveryRequests/:id",
    "title": "Update a Delivery Request",
    "group": "Delivery_Request",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "id",
            "description": "<p>Delivery request id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n\"deliveryItem\": \"Electronics\",\n\"requestedBy\": \"5db856b51e1970690817dde0\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n    \"pickPoint\": {\n        \"coordinates\": [\n            -104.0903,\n            39.9302\n        ],\n        \"type\": \"Point\"\n    },\n    \"dropPoint\": {\n        \"coordinates\": [\n            -104.6903,\n            39.4302\n        ],\n        \"type\": \"Point\"\n    },\n    \"deliveryStatus\": \"pending\",\n    \"isAccepted\": false,\n    \"_id\": \"5db5b7bdebad9934e883261c\",\n    \"deliveryItemId\": \"5db59b5866f687431c2269bb\",\n    \"requestedBy\": {\n        \"_id\": \"5db856b51e1970690817dde0\",\n        \"firstName\": \"Zeleke\"\n    },\n    \"deliveryItem\": \"Electronics\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/deliveryRequests.js",
    "groupTitle": "Delivery_Request",
    "name": "PutDeliveryrequestsId"
  }
] });
