// Exercise - Demerit Points
console.log(checkSpeed()); // check for undefined
console.log(checkSpeed(70)); // check for speedlimit
console.log(checkSpeed(71)); // check for below 75
console.log(checkSpeed(75)); // check for 75
console.log(checkSpeed(80)); // check for above 75
console.log(checkSpeed(130)); // check for above 12 points
const checkSpeed = speed => {
	const speedlimit = 70;
	const kmPerPoint = 5;
	let point = 0;
	if (!speed) return NaN;
	else if (speed < speedlimit + kmPerPoint) return 'OK';
	for (let i = 75; i <= speed; i++) if (i % 5 === 0) point++;
	return point < 12 ? `${point} point` : `License suspended`;
};
