// Supports modern browsers & IE10+

;(function(){

'use strict';

var QuietWheel = function(callback, callbackArgs, enableScrollEvents){

	enableScrollEvents = enableScrollEvents || false;

	var wheelUnits = [];
	var isWheelFired = false;
	var prevTime = new Date().getTime();

	function onWheel(e){
		if (!enableScrollEvents) e.preventDefault();
		var curTime = new Date().getTime();
		var wheelUnit = new WheelUnit(e);

		if(wheelUnits.length > 149){
			wheelUnits.shift();
		}
		wheelUnits.push(wheelUnit);

		var timeDiff = curTime-prevTime;
		prevTime = curTime;

		if(timeDiff > 200){
			wheelUnits = [];
			isWheelFired = false;
		}

		var averageEnd = getAverageScala(wheelUnits, 10);
		var averageMiddle = getAverageScala(wheelUnits, 70);
		var isAccelerating = averageEnd >= averageMiddle;

		if (isAccelerating && wheelUnit.isVerticalScroll){
			if (!isWheelFired) {
				isWheelFired = true;
				callback.apply(e, callbackArgs);
			} 
		} else {
			isWheelFired = false;
		}
	}

	function getAverageScala(wheelUnits, range){
		var sum = 0;
		var arr_slice = wheelUnits.slice(Math.max(wheelUnits.length - range, 1));
		for(var i = 0; i < arr_slice.length; i++){
			sum += arr_slice[i].scala;
		}
		return Math.ceil(sum/range);
	}

	window.addEventListener('wheel', onWheel);
};

function WheelUnit(e){

	var self = this;

	self.e = e;

	self.scala = Math.abs(e.deltaY);

	self.direction = Math.max(-1, Math.min(1, self.scala)) > 0 ? 'up' : 'down';

	self.isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX);
}

if (typeof define === 'function' && define.amd) define(QuietWheel);
else if (typeof module === 'object' && module.exports) module.exports = QuietWheel;
else this.QuietWheel = QuietWheel;
}).call(this);
