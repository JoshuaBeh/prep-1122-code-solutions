function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 8);
console.log('addTwoNumbers Exercise:', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursToMinutes = convertHoursToMinutes(3);
console.log('hoursToMinutes Exercise:', hoursToMinutes);

function getGreeting(name) {
  return 'Hi, my name is ' + name + '.';
}

var nameGreeting = getGreeting('Joshua');
console.log('getGreeting Exercise:', nameGreeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addThenMultiplyBy5 = addAndMultiplyBy5(15, 5);
console.log('addAndMultiplyBy5 Exercise:', addThenMultiplyBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyThenDivideBy5 = multiplyAndDivideBy5(10, 20);
console.log('multiplyAndDivideBy5 Exercise:', multiplyThenDivideBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(5, 10);
console.log('subtractTwoNumbers Exercise:', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumferenceOfCircle = getCircleCircumference(4);
console.log('getCircleCircumference Exercise:', circumferenceOfCircle);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Joshua', 'Beh');
console.log('getFullName Exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var cubeOfNumber = cube(5);
console.log('cube Exercise:', cubeOfNumber);
