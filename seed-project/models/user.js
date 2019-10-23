const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const muv = require('mongoose-unique-validator');

var schema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    // Install npm i mongoose-unique-validator to handle validations
    email: { type: String, required: true, unique: true },
    messages: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

// Insert mongoose-unique-validator plugin to enable unique validator in mongoose
schema.plugin(muv);

module.exports = mongoose.model('User', schema);