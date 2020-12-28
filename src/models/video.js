import {Schema, model} from'mongoose'

const videoSchema = new Schema({
    name: String, 
    author: String, 
    category: String,
    imgUrl: String,
    url: String
}, {
    timestamps: true,
    versionKey: false
})

export default model("Video", videoSchema);