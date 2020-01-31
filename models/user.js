var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    dni: {type: String, required: true, max: 9},
    asistencia: {type: Number, required: true},
    asistenciaRoad: {type: Number, required: true},
    valoracionesRoad: {type: Number, required: true},
    tutorias: {type: Boolean, required: true}
});


// Export the model
module.exports = mongoose.model('User', UserSchema); 