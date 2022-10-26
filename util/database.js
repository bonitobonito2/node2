const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;


let database;

const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb+srv://Zaalizaali2:Zaalizaali2@cluster0.rqhh2.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((resul) => {
      console.log("connected");
      database = resul.db()
      cb()
    })
    .catch((err) => {
      console.log(err);
      throw err
    });
};

const getDb = ()=>{
  if(database) return database
  throw 'no db'
}

exports.mongoConnect = mongoConnect

exports.getDb = getDb