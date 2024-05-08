const Max = require('max-api');

let accumulatedData = '';

function processData(receivedData) {
    accumulatedData += receivedData;

    const lines = accumulatedData.split("\n");
    if (lines.length > 1) {
        for (let i = 0; i < lines.length - 1; i++) {
            const line = lines[i];

            // Split the line into parts based on space
            const parts = line.split(" ");

            // Process each part of the line
            for (const part of parts) {
                const subParts = part.split(":");
                if (subParts.length === 2) {
                    const identifier = subParts[0];
                    const value = parseInt(subParts[1]);

                    // Check if it's a slider or potentiometer data
                    if (identifier.startsWith("conFad")) {
                        const conFadnumber = parseInt(identifier.substring(6)); // Change 9 to 6
                        if (!isNaN(conFadnumber)) {
                            Max.outlet("Fad" + conFadnumber + " " + value);
                        } else {
                            Max.post("conFadnumber: " + identifier.substring(6));
                        }
                    } else {
                        // Handle unrecognized data or log a message
                        Max.post("Unrecognized data: " + part);
                    }
                } else {
                    // Handle parts that do not match the expected format
                    Max.post("Invalid data format: " + part);
                }
            }
        }

        accumulatedData = lines[lines.length - 1];
    }
}

Max.addHandler('arr', (receivedData) => {
    processData(receivedData);
});
