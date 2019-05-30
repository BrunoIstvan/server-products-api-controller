var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = Schema({
    name: String,
    price: Number,
    stock: Number,
    department: [ { type: mongoose.Schema.Types.ObjectId, ref: 'Department' } ]
}, { versionKey: false });

module.exports = mongoose.model('Product', productSchema);