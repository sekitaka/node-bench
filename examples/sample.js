var Stopwatch = require('../lib/stopwatch.js') ;
var stopwatch = new Stopwatch() ;
stopwatch.start() ;
for ( var i = 0; i < 100000000 ; i++ ){
    var hoge = 'hoge' ;
}
stopwatch.stop() ;
console.log( stopwatch.getTime() + ' (msec)') ;
