const Max = require('max-api');
const fs = require('fs');

let accumulatedData = '';  // Variable to accumulate incoming data

// Define a JavaScript function to process incoming data
function processData(receivedData) {
    // Append the received data to the accumulatedData
    accumulatedData += receivedData;

    // Check if there is a complete line in the accumulatedData
    const lines = accumulatedData.split("\n");
    if (lines.length > 1) {
        // Process each complete line
        for (let i = 0; i < lines.length - 1; i++) {
            const line = lines[i];

            // Split the line into parts based on ":"
            const parts = line.split(":");

            // Check if it's a potentiometer data
            if (parts[0] === "pot") {
                const potValue = parseInt(parts[1]);
                // Now you can use the potValue variable in Max MSP
                Max.outlet("pot", potValue);
            }
        }

        // Save the last incomplete line for future accumulation
        accumulatedData = lines[lines.length - 1];
    }
}

// Set up a Max handler to receive data from the Max environment
Max.addHandler('arr', (receivedData) => { 
    // Call the processData function with the received data
    processData(receivedData);
});
