const path = require('path');
const Max = require('max-api');

let previousValue = null;

// Use the 'addHandler' function to register a function for a particular message
Max.addHandler("evaluate_value", (currentValue) => {
    if (previousValue === null) {
        Max.outlet(0);
    } else if (currentValue > previousValue) {
        Max.outlet(1);
    } else if (currentValue < previousValue) {
        Max.outlet(-1);
    } else {
        Max.outlet(0);
    }
    previousValue = currentValue;
});

