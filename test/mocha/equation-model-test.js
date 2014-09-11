'use strict';

var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var EquationModel = require('../../app/js/models/equation-model');

describe('Backbone Mean-Median-Mode', function(done){
    var equation;
    before(function(done){
        this.mock = sinon.mock(Backbone);
        equation = new EquationModel();
        done();
    });

    it('should be an object', function(done){
        equation.set('numbers', 3);
        expect(equation).ok;
        expect(equation.get('numbers')).eql(3);
        done();
    });

    it('should calculate mean', function(done){
        equation.mean([1,2,4,5]);
        expect(equation).ok;
        expect(equation.get('meanVal')).eql(3);
        done();
    });
    it('should calculate median', function(done){
        equation.median([1,3,5]);
        expect(equation).ok;
        expect(equation.get('medianVal')).eql(3);
        done();
    });
    it('should calculate mode', function(done){
        equation.mode([1,3,3,5]);
        expect(equation).ok;
        expect(equation.get('modeVal')).eql(3);
        done();
    });

    after(function(){
        this.mock.verify();
    });
});