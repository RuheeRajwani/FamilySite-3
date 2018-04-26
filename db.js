module.exports = {
addContact(newContact, callback) {
    collection.insertOne(
        newContact
        , callback)
}
}
const MongoClient = require('mongodb').MongoClient
const ObjectID = require('mongodb').ObjectID;

const url = 'mongodb://localhost:27017'
let collection = null;

MongoClient.connect(url, (error, client) => {
    if (error) {
        console.log('Error connecting to db ' + error);
        return process.exit(1);
    }
    console.log("connected to database successfully.")
    db = client.db("familySiteDb");
    collection = db.collection('contact');
})