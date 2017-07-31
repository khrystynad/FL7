function isEven(num){
   return (num === 0) ? true : !(isEven(num -1));
}

module.exports = isEven;