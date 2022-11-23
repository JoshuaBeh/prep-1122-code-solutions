var person = {
  firstName: 'Joshua',
  lastName: 'Beh',
  hobbies: [
    'watching anime',
    'gaming'
  ]
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('This person\'s name is:', fullName);
person.job = 'student';
console.log('This person\'s current job is:', person.job);
person.previousJob = 'student';
console.log('This person\'s previous job was:', person.previousJob);
console.log('The complete person object:', person);
