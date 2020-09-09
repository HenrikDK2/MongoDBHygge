require("dotenv").config({ path: "./config.env" });
import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@${process.env.CLUSTERURL}/${process.env.DBNAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function main() {
  try {
    await client.connect();
    const collection = await client.db("Test").collection("Users");
    console.log(await collection.createIndex({ username: "Tom", age: 12 }, { unique: true }));
  } catch (error) {
    console.error(error);
  }
}

main();
