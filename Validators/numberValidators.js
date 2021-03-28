
const validNumbers = ['1','2','3','4','5','6','7','8','9','0',','];

const numberValidator = (numbers) => {
    console.log(numbers);
    for(let index = 0 ; index < numbers.length ;  index++){
        if(!validNumbers.includes(numbers[index])){
            return false ;
        }
            
    }
    return true ;
}
module.exports = {
    numberValidator
 } ;