var expect = require('chai').expect;
var ex = require('./ex.js').load('./exercise.js');
var boston = require('./bostonEmployeeSalaries.json');

tests   = [ 1000, 10000, 50000, 100000, 150000, 200000, 250000];
answers = [21784, 19430, 12758,   5163,   1198,    285,     66];

tests.forEach(function(salary,i){

	describe('Salaries larger than given salary', function() {
		it('Match Count', function() {
			ex.load(salary, boston);
			var bigger = ex.findBiggerSalaries();
			var count  = bigger.length;
			var answer = answers[i];
		    expect(count).to.equal(answer);
		});
	});

});