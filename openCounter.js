function openFunction() {
    let counter = 0;
    counter++;
    console.log(counter);
}

// call function twice
openFunction();
openFunction();

function closedFunction() {
    let counter = 0;

    let increment = () => {
        counter++;
        console.log(counter);
    }

    return increment;
}

// assign var to the function but don't execute it yet.  this will initialize the counter var to 0
let runClosedFn = closedFunction();

// run twice
runClosedFn();
runClosedFn();