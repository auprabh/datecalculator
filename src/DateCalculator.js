var dateCalculator = require('./CalcLogic');
var _prompt = 'calc> ';
var _infoMsgBye = 'Thanks for using Date Calculator';

// Intro banner
console.log('-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-');
console.log('');
console.log('				Welcome to DateCalculator utility');
console.log('');
console.log('Description:');
console.log('	Date Calculator utility calculates the days lapsed between 2 given dates.\n	The date range can be between 01/01/1901 and 31/12/2999.\n	All dates are in dd/MM/yyyy format');
console.log('Usage:');
console.log('	a) Type the dates in dd/MM/yyyy format with syntax like StartDate - EndDate, e.g. 01/02/2015 - 05/05/2015.\n	   Note the space before and after hyphen/dash (-).');
console.log('	b) To quit just press CTRL C OR type the keyword quit and press Enter button.');
console.log('	c) You can see this Usage again by typing keyword help on command line anytime.');
console.log('');
console.log('-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-');

// CLI
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt(_prompt);
rl.prompt();

rl.on('line', function(line) {
  switch(line.trim()) {
    case 'help':
      console.log('Usage:');
	  console.log('	a) Type the dates in dd/MM/yyyy format with syntax like StartDate - EndDate, e.g. 01/02/2015 - 03/02/2015.\n	   Note the space before and after hyphen/dash (-).');
	  console.log('	b) To quit just press CTRL C OR type the keyword quit and press Enter button.');
      break;
	  case 'quit':
      console.log(_infoMsgBye);
	   process.exit(0);
      break;
    default:
		var result = dateCalculator.dateCalc(line);
		if(typeof result !== 'undefined' && typeof result === 'number'){
			console.log(result+' days');
		}else{
			console.log(result);
		}
      break;
  }
  rl.setPrompt(_prompt);
  rl.prompt();
}).on('close', function() {
  console.log(_infoMsgBye);
  process.exit(0);
});