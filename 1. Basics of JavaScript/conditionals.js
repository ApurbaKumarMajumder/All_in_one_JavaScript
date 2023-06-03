// Conditionals, Control flows (if else)
// 18-35 is my target demographic
// && AND
// || OR

var age = prompt('What is your age?');
var userStatus;

if (age >= 18 && age <= 35) {
    userStatus = 'target demo';
    console.log(userStatus);
} else {
    userStatus = 'not my audience';
    console.log(userStatus);
}

// Switch statements
// differentiate between weekday vs. weekend
// day 0 --> Sunday
// day 6 --> Saturday --> weekend

switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';
}

console.log(text);