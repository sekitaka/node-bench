/**
 * User: sekitakashi
 * Date: 2013/02/12
 * Time: 21:43
 * Benchmark utility
 */
var Stopwatch = require('./stopwatch.js') ;

var Bench = exports.Bench = {
    fire: function(fn, count){
        var s = new Stopwatch() ;
        s.start() ;
        for ( var i = 0 ; i < count ; i++ ){
            fn() ;
        }
        s.stop() ;
    }
}
