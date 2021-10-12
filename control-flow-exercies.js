// Exercise - Demerit Points
const checkSpeed = speed => {
	const speedlimit = 70;
	const kmPerPoint = 5;
	let point = 0;
	if (!speed) return NaN;
	else if (speed < speedlimit + kmPerPoint) return 'OK';
	for (let i = 75; i <= speed; i++) if (i % 5 === 0) point++;
	return point < 12 ? `${point} point` : `License suspended`;
};

// console.log(checkSpeed()); // check for undefined
// console.log(checkSpeed(70)); // check for speedlimit
// console.log(checkSpeed(71)); // check for below 75
// console.log(checkSpeed(75)); // check for 75
// console.log(checkSpeed(80)); // check for above 75
// console.log(checkSpeed(130)); // check for above 12 points

/****************************************************************/

// Exercise - Even and Odd Numbers
const showNumbers = limit => {
	for (let i = 0; i <= limit; i++) {
		console.log(i, i % 2 === 0 ? 'EVEN' : 'ODD');
	}
};
// showNumbers(10);

/****************************************************************/

// Exercise - Count Truthy
let countTruthy = array => {
	let count = 0;
	for (let item of array) if (item) count++;
	return count;
};
const array = [1, true, NaN, undefined, 'string', '', null, false, 0];
// console.log(countTruthy(array));

/****************************************************************/

// Exercise - String Properties
let obj = {
	name: 'Mahmoud',
	age: 29,
	isMarried: false
};
const showProperties = obj => {
	for (let key in obj) {
		if (typeof obj[key] === 'string') console.log(key, obj[key]);
	}
};

showProperties(obj)