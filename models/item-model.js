const { Schema, model } = require("mongoose");

const ItemSchema = new Schema({
    item: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [],
    likes: [],
    tags: []
     
});

module.exports = model("Item", ItemSchema);