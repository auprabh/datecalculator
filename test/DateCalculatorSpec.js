var dateCalculator = require('../src/CalcLogic');
var expect = require('expect.js');

describe("Testing Invalid entry scenarios... ", function(){
  it('If empty string, then Invalid entry. is returned', function(){
    expect(dateCalculator.dateCalc('')).to.be.equal('Invalid entry.');
  });
  it('If somethingTrash, then Invalid length of User Input. is returned', function(){
    expect(dateCalculator.dateCalc('somethingTrash')).to.be.equal('Invalid length of User Input.');
  });
});

describe("Testing Invalid format scenarios... ", function(){
  it('If 17-01-2016 - 19-01-2016, then The user input does not has a slash (/) in a Date OR a hyphen/dash (-) with space before & after it between the Dates. is returned', function(){
    expect(dateCalculator.dateCalc('17-01-2016 - 19-01-2016')).to.be.equal('The user input does not has a slash (/) in a Date OR a hyphen/dash (-) with space before & after it between the Dates.');
  });
  it('If 17/01/2016 * 19/01/2016, then The user input does not has a slash (/) in a Date OR a hyphen/dash (-) with space before & after it between the Dates. is returned', function(){
    expect(dateCalculator.dateCalc('17/01/2016 * 19/01/2016')).to.be.equal('The user input does not has a slash (/) in a Date OR a hyphen/dash (-) with space before & after it between the Dates.');
  });
   it('If 17/01/2016-09/01/2016, then Invalid length of User Input. is returned', function(){
    expect(dateCalculator.dateCalc('17/01/2016-09/01/2016')).to.be.equal('Invalid length of User Input.');
  });
});

describe("Testing Out of range scenarios... ", function(){
  it('If 01/01/1900 - 01/02/1900, then StartDate is not in range of 01/01/1901 - 31/12/2999 is returned', function(){
    expect(dateCalculator.dateCalc('01/01/1900 - 01/02/1900')).to.be.equal('StartDate is not in range of 01/01/1901 - 31/12/2999');
  });
   it('If 01/01/1901 - 31/12/3000, then EndDate is not in range of 01/01/1901 - 31/12/2999 is returned', function(){
    expect(dateCalculator.dateCalc('01/01/1901 - 31/12/3000')).to.be.equal('EndDate is not in range of 01/01/1901 - 31/12/2999');
  });
});

describe("Testing Boundary scenarios... ", function(){
  it('If 01/01/1901 - 31/01/2999, then 401066 days is returned', function(){
    expect(dateCalculator.dateCalc('01/01/1901 - 31/01/2999')).to.be.equal(401066);
  });
   it('If 01/01/1901 - 03/01/1901, then 1 day is returned', function(){
    expect(dateCalculator.dateCalc('01/01/1901 - 03/01/1901')).to.be.equal(1);
  });
  it('If 29/12/2999 - 31/12/2999, then 1 day is returned', function(){
    expect(dateCalculator.dateCalc('29/12/2999 - 31/12/2999')).to.be.equal(1);
  });
});

describe("Testing other condition ... ", function(){
  it('If 02/06/1983 - 22/06/1983, then 19 days is returned', function(){
    expect(dateCalculator.dateCalc('02/06/1983 - 22/06/1983')).to.be.equal(19);
  });
  it('If 04/07/1984 - 25/12/1984, then 173 days is returned', function(){
    expect(dateCalculator.dateCalc('04/07/1984 - 25/12/1984')).to.be.equal(173);
  });
  it('If 03/01/1989 - 03/08/1983, then 1979 days is returned', function(){
    expect(dateCalculator.dateCalc('03/01/1989 - 03/08/1983')).to.be.equal(1979);
  });
  it('If 07/11/1972 - 08/11/1972, then 0 days is returned', function(){
    expect(dateCalculator.dateCalc('07/11/1972 - 08/11/1972')).to.be.equal(0);
  });
  it('If 01/01/2000 - 03/01/2000, then 1 day is returned', function(){
    expect(dateCalculator.dateCalc('01/01/2000 - 03/01/2000')).to.be.equal(1);
  });
});