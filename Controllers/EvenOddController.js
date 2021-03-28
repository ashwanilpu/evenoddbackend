// Import Modules 
const express = require('express');
const {evenOrOddService} = require('../Services/evenOrOddService');
const {numberValidator} = require ('../Validators/numberValidators');

// Router for Even or odd 
const Router = express.Router();


// End point 
Router.post('/' , async (req, res) => {
    if(!numberValidator(req.body.stream)){
        return res.status(400).send({sucess:true , message : "Not a valid Numbers"});
    }
    const data = await evenOrOddService(req.body.stream);
    return res.status(201).send({sucess:true , data : data});
})


module.exports = Router ;