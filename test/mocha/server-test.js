'use strict';

require('../../server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);
var expect = chai.expect;

describe('server running', function(){
	it('should get 200 success message'), function(done){
		chai.request('http://localhost:3000').get('/').res(function(res){
				expect(res).status(200);
				done();
			});
	};
});