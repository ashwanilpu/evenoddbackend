// Importing Modules
const express = require('express');
const EvenOddController = require('./Controllers/EvenOddController');
var cors = require('cors')


// Building of express app
const app = express() ; 

// configuring the express app
app.use(express.json());
var corsOptions = {
    origin: '*',
    allowedHeaders: [
        'Content-Type',
      ],
      methods: [
        'GET',
        'POST',
      ],
}
app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: true }));
app.use('/isEvenOrOdd',EvenOddController);  // Route for EvenOddController


// configuring the port 
const port =  (process.env.port || 8001) ;


// starting of server 
app.listen( port , () =>{
    console.log( 'Server is started at port ' + port);
})