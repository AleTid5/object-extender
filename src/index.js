const R = require('ramda');

Object.prototype.map = function(callback) {
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
             callback(key, this[key]);
        }
    }
}