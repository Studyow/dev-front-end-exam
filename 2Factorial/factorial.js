// find the factorial of a number
// By: JLevz Bonifacio
// jan-17-2024
function factorial(x) {

    // if number is 0
    if (x == 0) {
        return 1;
    }

    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

function add_element() {
    // input from the user
    positiveNo = document.getElementById("posNo").value;
    document.getElementById("posNo").value = "";
    console.log(positiveNo);
    
    // Init
    const num = positiveNo;
    var e = "";  
    var factorialOf = ""; 

    // calling factorial() if num is positive
    if (num >= 0) {
        const result = factorial(num);
        console.log(`The factorial of ${num} is ${result}`);
        e = num;
        factorialOf = result;
        document.getElementById("mainNo").innerHTML = e;
        document.getElementById("resultNo").innerHTML = factorialOf;
    }
    else {
        var errorA = "Enter a positive number."
        console.log('Enter a positive number.');
        document.getElementById("errorA").innerHTML = errorA;
    }
}
