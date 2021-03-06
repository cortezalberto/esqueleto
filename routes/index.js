var express = require('express');
var router = express.Router();
var controller = require('../controllers/indexController')
const {body, check} = require('express-validator')
const validaciones = [

    check('name').isLength({min:1}).withMessage('Debe ingresar un nombre'),
    check('email').isEmail().withMessage('Debe ingresar un email valido'),
    check('color').isLength({min:1}).withMessage('Debe seleccionar un color'),
    body('age').custom(value => {
        if(isNaN(value)){
            throw new Error('El valor ingresado debe ser un numero');
        }else {
            return true;
        }
    })
]
/* GET home page. */
router.get('/', controller.index);

// Procesar por Post
router.post('/',validaciones, controller.store);

router.get('/color', controller.color)
router.get('/borrar', controller.borrar)

module.exports = router;
