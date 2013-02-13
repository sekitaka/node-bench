/**
 * User: sekitakashi
 * Date: 2013/02/12
 * Time: 21:43
 * Stopwatch
 */
var Stopwatch = module.exports = function(){
    this.init() ;
} ;

Stopwatch.prototype = {
    init: function(){
        this.st = 0 ;
        this.et = 0 ;
        this.laps = [] ;
    },
    start: function(){
        this.st = new Date() ;
    },
    stop: function(){
        this.et = new Date() ;
    },
    lap: function() {
        this.laps.push(new Date()) ;
    },
    getTime: function(unit) {
        unit = unit || 'msec' ;
        var divisor ;
        if (unit == 'sec') divisor = 1000 ;
        else if ( unit == 'min' ) divisor = 1000 * 60 ;
        else if ( unit == 'hour') divisor = 1000 * 60 * 60 ;
        else if ( unit == 'msec') divisor = 1 ;
        else divisor = 1 ;
        return Math.floor((this.et-this.st)/divisor) ;
    }
} ;



