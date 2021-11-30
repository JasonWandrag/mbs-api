const { MongoClient } = require("mongodb");

const mongo_pass = "yTux45LogUFQ7z0a";
const mongo_user = "mbsUser";

const uri =
  "mongodb+srv://mbsUser:yTux45LogUFQ7z0a@mind-body-soul.dygc7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
