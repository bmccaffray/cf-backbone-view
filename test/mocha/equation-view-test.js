'use strict';

var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var EquationView = require('../../app/js/views/equation-view');

var EquationModel = require('../../app/js/models/equation-model');
var equationModel = new EquationModel();

describe('Backbone Mean-Median-Mode View', function(){
    before(function(done){
        sinon.spy(EquationView.prototype, 'render');
        done();
    })

    it('should execute render', function(done){
        this.equationView = new EquationView({model: equationModel});
        expect(EquationView.prototype.render.called).true;
        done();
    });

    it('should show anything in view', function(done){
        this.equationView = new EquationView({model: equationModel});
        expect(this.equationView.$el).not.eql('');
        done();
    });

    after(function(done){
        EquationView.prototype.render.restore();
        done();
    });
});