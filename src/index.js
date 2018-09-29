module.exports = function getZerosCount(number) {
  // your implementation
  result = 0
   for (var i = 1; i <= number; i++) {
       x = i
       while (x % 5 == 0){ 
             x /= 5
             result++
       }
   }
   return result
}
