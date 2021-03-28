// Importing modules
const axios = require('axios');
const { response } = require('express');

// const Base url
const BASE_URL = "https://terriblytinytales.com/testapi?rollnumber="

const evenOrOddCheck = async ( number ) => {
    try{
        const response = await axios.get(BASE_URL+number);
        return {id:number,value:response.data};
    }
    catch(error){
        return error ;
    }
}

module.exports = {
    evenOrOddCheck,
}