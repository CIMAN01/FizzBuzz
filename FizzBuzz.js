// Javascript solution for FizzBuzz

var output = [];

function fizzBuzz() { 
    // loop
    for (var count = 1; count <= 100; count++) {
        // order of if else statement crucial
        if(count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if(count % 3 === 0) {
            output.push("Fizz");
        }
        else if(count % 5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(count);
        }
        // increment counter
        count++;
    }
    // log to the outputs
    console.log(output);
}
