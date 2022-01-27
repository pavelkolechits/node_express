const ItemModel = require('../models/item-model')


class ItemServise {
    async createItem (userId){
        const item = ItemModel.create({user: userId})
        return item
    }
}

module.exports = new ItemServise()