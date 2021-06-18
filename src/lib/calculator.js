module.exports.sum = (num1, num2) => {

  if(isNaN(parseInt(num1, 10)) || isNaN(parseInt(num2, 10))){
    throw new Error('Deu ruim veinho')
  }
  
 return parseInt(num1, 10) + parseInt(num2, 10)
}