//Backbone Equation View
var Backbone = require('backbone');
$ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
	tagName: 'div',
	events: {
		'keyup #numbers': 'equate',
		'click #clear': 'numClear'
	},

	initialize: function(){
		this.render();
	},

	render: function(){
		var template = require('../templates/equation-template.hbs');
		var data = this.model.attributes;
		this.$el.html(template(data));
		// this.$el.children('#mmm').append(noteView.$el);
		//this.$el.children('#mmm').append(this.$el);

		var valNums = this.model.get('numbers');
		valNums = valNums.toString().split(',').join(' ');
		valNums = valNums + ' ';
		$('#numbers').val(valNums);
		$('#numbers').focus();

		return this;
	},

	equate: function(){
		var numberArray = this.$el.find('#numbers').val();
		var numArray = numberArray.split(' ').map(function(x){return parseInt(x)});
		numArray.sort(function(a, b){return a-b});

		this.model.set('numbers', numArray);

		this.model.mean(numArray);
		this.model.median(numArray);
		this.model.mode(numArray);

		this.render();
	},

	numClear: function(){
		this.model.set('numbers', null);
		this.render();
	}
});