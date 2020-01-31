var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CertificateSchema = new Schema({
    name: {type: String, required: true, max: 100},
    dni: {type: String, required: true, max: 9},
    certificateAddress: {type: String, required: true},
    txnHash: {type: String, required: true},
    blockNumber: {type: Number, required: true},
    institucion: {type: String, required: true},
    title: {type: String, required: true},
    hash: {type: String, required: true}
});


// Export the model
module.exports = mongoose.model('Certificate', CertificateSchema);