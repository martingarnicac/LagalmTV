import {Schema, model} from'mongoose'

const videoSchema = new Schema({
    name: String, 
    device: String,
    nick: String,
    email: String,
    password: String,
    status: Boolean
}, {
    timestamps: true,
    versionKey: false
})
