//Backbone Equation Model
var Backbone = require('backbone');
Backbone.$ = require('jquery');

module.exports = Backbone.Model.extend({
	url: '/api/v_0_0_1/equations',
	idAttribute: '_id',
	defaults: {
		numbers: '',
		meanVal: '',
		medianVal: '',
		modeVal: ''
	},
	mean: function(numArray){
		var mean = numArray;
		var mean = 0;

		for(var i = 0; i < numArray.length; i++){
		    mean += numArray[i];
		}
		mean /= numArray.length;

		mean = Math.round(mean * 100) / 100;

		this.set('meanVal', mean);
	},
	median: function(numArray){
		var median = numArray;
		var medianMin = 0, medianMax = 0;
		if((median.length % 2) == 0){
		    medianMin = numArray.length/2 - 1;
		    medianMax = numArray.length/2;
		    median = (numArray[medianMin] + numArray[medianMax])/2;
		} else {
			median = numArray[Math.floor(numArray.length/2)];
		}

		this.set('medianVal', median);
	},
	mode: function(numArray){
		var mode = numArray;
		var mode = 0;
		var modeNum;
		var count = 0;
		var maxCount = 0;
		for(var i = 0; i < numArray.length; i++){
			if(numArray[i] == (numArray[i+1])){
		        count++;
		        if(count > maxCount){
		            modeNum = numArray[i];
		            maxCount = count;
		        }
			} else {
				count = 0;
			}
		}
		if(modeNum){
			mode = modeNum;
		} else {
			mode = 'no mode';
		}

		this.set('modeVal', mode);
	}
});