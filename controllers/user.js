var User = require('../models/user');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.user_create = function (req, res) {
    var user = new User(
        {
            name: req.body.name,
            dni: req.body.dni,
            asistencia: req.body.asistencia,
            asistenciaRoad: req.body.asistenciaRoad,
            valoracionesRoad: req.body.valoracionesRoad,
            tutorias: req.body.tutorias

        }
    );

    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('user Created successfully')
    })
};

exports.user_details = function (req, res) {
    User.find({dni: req.params.id }, function (err, user) {
        if (err) return next(err);
        res.send(user);
    })
};

exports.user_update = function (req, res) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err) return next(err);
        res.send('certificate udpated.');
    });
};

exports.user_delete = function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};