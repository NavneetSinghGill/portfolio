const MongoClient = require('mongodb').MongoClient;
const CONSTANTS = require('./Constants');

// Create a new MongoClient
const client = new MongoClient(CONSTANTS.DATABASE.url(), 
                                { 
                                  useNewUrlParser: true,
                                  useUnifiedTopology: true 
                                });

// Use connect method to connect to the Server
const connect = client.connect( (error, result) => {
  if(error) {
    console.log("MongoDB error connecting: " + error);
  } else {
    console.log("Connected successfully to server");
  }
});

const saveIP = (ip, callback = () => {}) => {
  if (client != undefined) {
      const db = client.db(CONSTANTS.DATABASE.DATABASENAME());
      let data = db.collection('ip').insertOne({
          ip,
          date: (new Date()).toString()
      }).then((response) => {
          callback();
      });
  }
}

module.exports =  {
  client,
  connect,
  saveIP
};