module.exports={

dateCalc: function(userInput){

	// User input length
	var _userInputLength = 23;  // Format is dd/MM/yyyy - dd/MM/yyyy.
	var _notBefore = '01/01/1901';  // default format is MM/dd/YYYY
	var _notAfter = '12/31/2999'; // default format is MM/dd/YYYY

	// Info messages
	var _infoMsgFun = 'DateCalculator is fun! Try something like this: 01/02/2015 - 03/02/2015';
	var _infoMsgBye = 'Thanks for using Date Calculator';
	var _infoMsgRightFormat = 'Please enter StartDate - EndDate in the format dd/MM/yyyy - dd/MM/yyyy. Note the space before and after hyphen/dash (-).';

	// Error messages
	var _errMsgUserInputUndefined = 'Invalid entry.';
	var _errMsgUserInputLength = 'Invalid length of User Input.';
	var _errMsgUserInputNoDash = 'The user input does not has a slash (/) in a Date OR a hyphen/dash (-) with space before & after it between the Dates.';
	var _errMsgInvalidStartDate = 'StartDate is not a valid date';
	var _errMsgInvalidEndDate = 'EndDate is not a valid date';
	var _errMsgStartDateIsNotInRange = 'StartDate is not in range of 01/01/1901 - 31/12/2999';
	var _errMsgEndDateIsNotInRange = 'EndDate is not in range of 01/01/1901 - 31/12/2999';

	if(typeof userInput !== 'undefined' && userInput){
		if(userInput.length !== _userInputLength){
			//console.info(_infoMsgRightFormat);
			//console.error(new Error(_errMsgUserInputLength));
			return (_errMsgUserInputLength);
		}else{
				if(userInput.indexOf('/') === -1 || userInput.indexOf(' - ') === -1){
					//console.info(_infoMsgRightFormat);
					//console.error(new Error(_errMsgUserInputNoDash));
					return (_errMsgUserInputNoDash);
				}else{
					var dates = userInput.split(' - ');
					var start = dates[0];
					var end = dates[1];
					start = this.convert2MMddYYYY(start);
					end = this.convert2MMddYYYY(end);
					var startDate = new Date(start);
					var endDate = new Date(end);
					//console.log('Start Date: ', startDate);
					//console.log('End Date: ', endDate);
					
					if(!this.isValidDate(start)){
						//console.error(new Error(_errMsgInvalidStartDate));
						return (_errMsgInvalidStartDate);
					}else if(!this.isValidDate(end)){
						//console.error(new Error(_errMsgInvalidEndDate));
						return (_errMsgInvalidEndDate);
					}else if(!this.isInRange(startDate)){
						//console.error(new Error(_errMsgStartDateIsNotInRange));
						return (_errMsgStartDateIsNotInRange);
					}else if(!this.isInRange(endDate)){
						//console.error(new Error(_errMsgEndDateIsNotInRange));
						return (_errMsgEndDateIsNotInRange);
					}else{
						//console.log('Elapsed Days: ', this.elapsedDays(startDate, endDate));
						return this.elapsedDays(startDate, endDate);
					}
				}
		}
	}else{
		//console.info(_infoMsgRightFormat);
		//console.error(new Error(_errMsgUserInputUndefined));
		return (_errMsgUserInputUndefined);
		//console.info(_infoMsgFun);
	}
},

isValidDate: function(dateString){
 var bits = dateString.split('/');
  var y = bits[2], m  = bits[0], d = bits[1];
  var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (this.leapYear(y)) {
    daysInMonth[1] = 29;
  }
  return d <= daysInMonth[--m];
},

leapYear:function(year){
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
},

isInRange:function(date){
	var _notBefore = '01/01/1901';  // default format is MM/dd/YYYY
	var _notAfter = '12/31/2999'; // default format is MM/dd/YYYY
	start = new Date (_notBefore);
	end = new Date (_notAfter);
	return (isFinite(date) && isFinite(start) && isFinite(end) ? start <= date && date <= end : NaN);
},

convert2MMddYYYY:function(dateString){
	var c = dateString.split('/');
	return (c[1]+'/'+c[0]+'/'+ c[2]);
},

elapsedDays:function(startDate, endDate) {
	if(startDate.getTime() === endDate.getTime()){
		return 0;
	}else{
		var millisecondsPerDay = 24 * 60 * 60 * 1000;
		var elapsedDaysResult = (endDate-startDate) / millisecondsPerDay;
		return elapsedDaysResult < 0 ? Math.abs(Math.floor(elapsedDaysResult+1)) : Math.ceil(elapsedDaysResult-1);
	}
}

};