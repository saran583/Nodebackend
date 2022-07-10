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

        // insert doucments
        // insertData(collection, client);

        // Get all records
        // findData(collection, client);

        //Updating a document
        updateDoc(collection, client);

        //Removing a document
        // removeDoc(collection,client);


        
    }
})

function insertData(collection, client){
    var doc1 = {"Name":"Saran","Age":25, "Salary":100000,"Phone":8074006214}
    var doc2 = {"Name":"JK","Age":24, "Salary":90000,"Phone":9290040510}


    collection.insertMany([doc1, doc2],function(err,res){
        if(err){
            console.log("error inserting a document", err)
            client.close()
        }
        else{
            console.log("successfully inserted records", res)
            client.close()
        }
        client.close();
    });
}

function findData(collection, client){
    collection.find().toArray(function(err,res){
        if(err){
            console.log("error retriving data",err)
            client.close()
        }
        else if(res.length){
            console.log(res);
            client.close()
        }
        else{
            console.log("no data found")
            client.close()
        }
    })
}

function updateDoc(collection, client){
    collection.update({Name:"Saran"},{$set:{Salary:120000}},function(err,res){
        if(err){
            console.log("Error updating the document",err)
            client.close()

        }
        else{
            console.log("Document updated successfully",res);
            client.close()
        }
    })

}

function removeDoc(collection,client){
    collection.remove({Name:"JK"},function(err,res){
        if(err){
        console.log("Error removing document", err)
        }
        else{
            console.log("Removed the document successfully",res);
            client.close()
        }
    })
}