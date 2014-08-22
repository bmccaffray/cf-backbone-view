var $ = require('jquery');
var Equation = require('./models/equation-model');
var EquationView = require('./views/equation-view');

var equation = new Equation();
var equationView = new EquationView({model: equation});

$('#mmm').html(equationView.$el);