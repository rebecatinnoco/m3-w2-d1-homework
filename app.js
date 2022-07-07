const { Double } = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/statsdb";

MongoClient.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
}, function (err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

var dbo = db.db('statsdb')

// var stats = { City: "Pacoima", Zip: "91331", State: "CA", Income: "60360", Age: "33"};
// dbo.collection('uscensus').insertOne(stats, function(err,res) {
//     if (err) throw err;
//     console.log("1 document inserted")
//     db.close();
// })
// var stats = { City: "Ketchikan", Zip: "99950", State: "AK", Income: "00000", Age: "00"};
// dbo.collection('uscensus').insertOne(stats, function(err,res) {
//     if (err) throw err;
//     console.log("1 document inserted")
//     db.close();
// })

var stats =[
    {
        'city': 'San Juan', 
        'zip': '00926', 
        'state': 'PR', 
        'income': '34781',
        'age': '44'
    },
    {
        'city': 'Corona', 
        'zip': '11368', 
        'state': 'NY', 
        'income': '50797',
        'age': '32'
    },
    {
        'city': 'Chicago', 
        'zip': '60629', 
        'state': 'IL', 
        'income': '42019',
        'age': '31'
    },
    {
        'city': 'El Paso', 
        'zip': '79936', 
        'state': 'TX', 
        'income': '54692',
        'age': '31'
    },
    {
        'city': 'Los Angeles', 
        'zip': '90011', 
        'state': 'CA', 
        'income': '36954',
        'age': '28'
    },
    {
        'city': 'Norwalk', 
        'zip': '90650', 
        'state': 'CA', 
        'income': '66453',
        'age': '35'
    }
];
// dbo.collection('uscensus').insertMany(stats, function(err, res) {
//     if (err) throw err;
//     console.log("number of document inserted: " + res.insertedCount)
//     db.close();
// });

// var query = { city: "Corona" }
// dbo.collection('uscensus').find(query).toArray(function(err,result) {
//     if (err) throw err;
//     console.log(result)
//     db.close();
// })

// var query = { state: "CA" }
// dbo.collection('uscensus').find(query).toArray(function(err,result) {
//     if (err) throw err;
//     console.log(result)
//     db.close();
// })

// var myquery = { State: "AK" }
// var newvalues = {$set: {Income: "38910", Age: "46"}};
// dbo.collection('uscensus').updateOne(myquery, newvalues,  function(err,res) {
//     if (err) throw err;
//     console.log("1 document updated")
//     db.close();
// });

// var mysort = { state: 1 }
// dbo.collection('uscensus').find().sort(mysort).toArray(function(err,result) {
//     if (err) throw err;
//     console.log(result)
//     db.close();
// })

var mysort = { state: -1 }
dbo.collection('uscensus').find().sort(mysort).toArray(function(err,result) {
    if (err) throw err;
    console.log(result)
    db.close();
})
});