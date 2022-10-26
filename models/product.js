const getDb = require("../util/database").getDb;
const mongodb = require("mongodb");
class Product {
  constructor(title, price, description, imageUrl, id) {
    (this.title = title),
      (this.price = price),
      (this.description = description),
      (this.imageUrl = imageUrl);
    this._id = mongodb.ObjectId(id);
  }

  save() {
    const db = getDb();
    return db
      .collection("products")
      .insertOne(this)
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  update() {
    const db = getDb();
    console.log(this, "xsadsadsad");
    return db
      .collection("products")
      .updateOne({ _id: this._id }, { $set: this })
      .then((res) => res)
      .catch((err) => err);
  }
  static getAll() {
    const db = getDb();
    return db
      .collection("products")
      .find()
      .toArray()
      .then((products) => products)
      .catch((err) => {
        console.log(err);
      });
  }
  static findById(id) {
    const db = getDb();
    return db
      .collection("products")
      .find({ _id: new mongodb.ObjectId(id) })
      .next()
      .then((products) => products)
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = Product;
