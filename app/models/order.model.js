const mongoose = require('mongoose');

//Create the model schema based on the document structure
const OrderSchema = mongoose.Schema({
    items : [{id : String, item : String, image : String, size : String, qty:String, price:String, ProductImage:String}],
    cartNumber : String,
    totalQty: String,
    totalPrice: String,
    DeliveryPrice: String,
    finalPrice : String,
    username : String,
    date : String,
    orderstatus: String
});

module.exports = mongoose.model('Order', OrderSchema);