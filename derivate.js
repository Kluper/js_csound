const path = require('path');
const Max = require('max-api');

let previousX = null;
let previousY = null;

Max.addHandler("derive", (currentX, currentY) => {
    // If this is the first call, just store the values and don't calculate the derivative
    if (previousX === null || previousY === null) {
        previousX = currentX;
        previousY = currentY;
    } else {
        // Check if the currentX and previousX are the same to avoid division by zero
        if (currentX === previousX) {
            Max.outlet("Error: Division by zero.");
        } else {
            // Calculate the derivative using the correct formula
            let derivative = (currentY - previousY) / (currentX - previousX);
            Max.outlet(derivative);
        }

        // Update previous values after the calculation
        previousX = currentX;
        previousY = currentY;
    }
});
