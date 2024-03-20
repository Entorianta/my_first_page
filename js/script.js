/* console.log('HELLO');

alert('HELLO');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logo').innerHTML = 'NEW LOGO';
})
*/ 

/* let length = 10;
let width = 5;
let area = length * width;
let perimeter = (length + width) * 2;

console.log("length", length);
console.log("width", width);
console.log("area", area);
console.log("perimeter", perimeter);
*/

/* let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
console.log(celsius, "C is:", fahrenheit);
*/


/* let one = 1;
let two = '1';

console.log( one > two);

console.log( one < two);

console.log( one <= two); // less or equal

console.log( one >= two); // more or equal

console.log( 'just compare', one == two); // comparing. Is it exactly equal?

console.log( one === two); // strict comparison; means that the types should be equal as well

*/
/*
let score = 75;

// if statement
if (score >= 90) {
    console.log('score is more than 90')
}

/* IF and ELSE is Black and white - either one or another. If IF is false, then else appears
*/

/*
// if/else statement
if (score >= 90) {
    console.log('score is more than 90')
}

else {
    console.log('THIS IS ELSE STATEMENT')
}
*/

/* else if statement
if (score >= 75) {
    console.log('Very Good')
}

else if (score >= 60) {
    console.log('Good')
}
*/

/*
//for loop
let i = 1;
// take i; is i less or equal 5?; then ittirate i+1 and check again
for (i; i <= 5; i++ ) {
    console.log('Itteration number', i)
}
*/

/*
//while loop
let i = 1;
while (i <= 5) {
    console.log('Iteration number', i);
    i++;
}
*/

/*
function greet() {
    console.log('Hello world');
}

greet();
*/

/*
// This part is waiting for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');

    // DRY Code: Donot Repeat Yourself

    let logo = document.getElementById('logo');

    logo.addEventListener('mouseover', function() {
        logo.style.color = "blue";
        console.log('mouseover');
    });

    logo.addEventListener('mouseout', function() {
        logo.style.color = "black";
        console.log('mouseoout');
    });

    logo.addEventListener('click', function() {
        logo.style.backgroundColor = "black";
        console.log('click');

        logo.innerHTML = 'NEW TEXT';

        logo.style.color = "white"; 
    });
*/

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    
    document.getElementById('contact-form').addEventListener('submit', function(event){
        console.log(event);

        event.preventDefault();

        let emailInput = document.getElementById('emailInput');
        let errorMessage = document.getElementById('errorMessage');

        if (emailInput.value === '' ) {
            errorMessage.textContent = 'Email cannot be empty';
            errorMessage.style.color = "red";
        }
        else {
            errorMessage.textContent = 'Thank you!';
            errorMessage.style.color = "green";
        }

    });

})


