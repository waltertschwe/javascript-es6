/* How to use the fat arrow to filter() an 
   array of objects in ES6

*/

var stocks = [{"ticker":"MSFT", "price": 68},
              {"ticker":"GOOG",  "price": 815},
              {"ticker":"AAPL", "price": 125 },
              {"ticker":"GE", "price": 30 }];

// get all stocks that have a price of less than 100
var results = stocks.filter( ticker => ticker.price < 100);

console.log( "stocks with a price less than $100 a share = " , results);



