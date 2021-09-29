const modelo = require('../models/umodels');

exports.index = function (req, res) { 
    modelo.get (function (err, models) { 
        if (err) { 
            res.json ({ 
              status: "error", 
              message: err, 
}); 
        } 
        res.json ({ 
          estado: "éxito", 
          mensaje: "Datos correctos", 
          datos: models
        }); 
    }); 
};

exports.new = function (req, res) { 
    var user = new modelo (); 
    user.name = req.body.name? req.body.name: contact.name; 
    user.surname = req.body.surname; 
    user.mail = req.body.mail; 
    user.age = req.body.age;
    user.number = req.body.phone;
    user.save (function (err) { 
        if (err) 
          res.json (err);
res.json ({ 
            menssage: 'Nuevo usuario registrado', 
            data: modelo
        }); 
    }); 
};
