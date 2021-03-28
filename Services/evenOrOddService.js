// Import modules
const {evenOrOddCheck} = require('../Apis/evenOrOddApi');



const evenOrOddService = async ( numbers ) => {
    const numberList = numbers? numbers.split(',') : [] ;
    let result = [] ;
    for( let index = 0 ; index < numberList.length ; index++){
       let data =  await evenOrOddCheck(numberList[index]);
       result.push(data);
    }
    return result ;
}

module.exports = {
    evenOrOddService,
}