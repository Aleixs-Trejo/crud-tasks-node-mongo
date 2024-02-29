import {connect} from "mongoose";
import { MONGODB_URI } from "./config";

console.log(MONGODB_URI);
(async () => {
  try{
    const db = await connect(MONGODB_URI);
    console.log(`DB connected to ${db.connection.name}`);
  } catch(err) {
    console.log(err);
  }
})()