const mongoose = require('mongoose');


/*This model schema will be exported to different files
and used to create and update data in the database using this schema
Create the model schema based on the document structure*/
const ContactSchema = mongoose.Schema({
    Username: String,
    Org: String,
    Number: String,
    Email:String,
    Message:String
});

module.exports = mongoose.model('Contact', ContactSchema);
