/* How to use the fat arrow to reduce() an 
   array of objects in ES6

   Use it when: You want to find a cumulative or concatenated value 
   based on elements across the array.

*/

var stocks = [{"ticker":"MSFT", "institutions_owned": 35},
              {"ticker":"GOOG",  "institutions_owned": 74},
              {"ticker":"AAPL", "institutions_owned": 96 },
              {"ticker":"GE", "institutions_owned": 54 }]

var sum = stocks.reduce(( prevVal, stock) => prevVal + stock.institutions_owned, 0)

console.log("Total Institutional Ownership = " + sum)