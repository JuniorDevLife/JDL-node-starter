import mongoose from "mongoose";

const {Schema, model} = mongoose

const UserSchema = new Schema({
  name: String
})

export default model('user', UserSchema)