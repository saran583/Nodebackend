var mongodb = require("mongodb");

var Mongoclient = mongodb.MongoClient;

var url = 'mongodb+srv://saran:Saran"583@project1.askwntn.mongodb.net/?retryWrites=true&w=majority';

Mongoclient.connect(url, function(err, client){ 
    if(err){
        console.log("error connecting to the Db",err);
    }
    else {
        var db = client.db("firstdb")
        console.log("Connected to the DB", url);
        var collection = db.collection("fromcode");

        var doc1 = {"Name":"Saran","Age":25, "Salary":100000,"Phone":8074006214}
        var doc2 = {"Name":"JK","Age":24, "Salary":90000,"Phone":9290040510}

        collection.insertMany([doc1, doc2],function(err,res){
            if(err){
                console.log("error inserting a document", err)
            }
            else{
                console.log("successfully inserted records", res)
            }
            client.close();
        });
    }
})