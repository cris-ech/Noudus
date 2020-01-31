var Certificate = require('../models/certificate');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.certificate_create = function (req, res) {
    var certificate = new Certificate(
        {
          name: req.body.name,
          dni: req.body.dni,
          certificateAddress: req.body.certificateAddress,
          txnHash: req.body.txnHash,
          blockNumber: req.body.blockNumber,
          institucion: req.body.institucion,
          title: req.body.title,
          hash: req.body.hash

        }
    );

    certificate.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('certificate Created successfully')
    })
};

exports.certificate_details = function (req, res) {
    Certificate.find({hash : req.params.id}, function (err, certificate) {
        if (err) return next(err);
        res.send(certificate);
    })
};

exports.certificate_update = function (req, res) {
    Certificate.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, certificate) {
        if (err) return next(err);
        res.send('certificate udpated.');
    });
};

exports.certificate_delete = function (req, res) {
    Certificate.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};