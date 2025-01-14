function parent() {
    let message = 'Hello world';

    function child() {
        message = 'Bye';
        console.log(message);
    }

    child();
}

parent();
console.log(message);
