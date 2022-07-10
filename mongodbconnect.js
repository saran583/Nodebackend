var mongodb = require("mongodb");

var Mongoclient = mongodb.MongoClient;

var url = 'mongodb+srv://saran:Saran"583@project1.askwntn.mongodb.net/?retryWrites=true&w=majority';

Mongoclient.connect(url, function(err, db){ 
    if(err){
        console.log("error connecting to the Db",err);
    }
    else {
        console.log("Connected to the DB", url);
        db.close();
    }
})