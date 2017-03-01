// Supports modern browsers & IE10+

;(function(){

'use strict';

var PROJECT_NAME = function(args){};

if (typeof define === 'function' && define.amd) define(PROJECT_NAME);
else if (typeof module === 'object' && module.exports) module.exports = PROJECT_NAME;
else this.PROJECT_NAME = PROJECT_NAME;
}).call(this);
