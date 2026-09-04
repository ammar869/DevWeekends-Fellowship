// Async/Await and Promise Demo - JavaScript Fundamentals
// Demonstrates: Promise creation, resolve, reject, .then(), .catch(), async/await, try/catch

console.log("=== JavaScript Async/Await and Promise Demo ===\n");

// 1. PROMISE CREATION
console.log("1. Creating a Promise:");
const myPromise = new Promise((resolve, reject) => {
    // Simulate asynchronous operation with setTimeout
    setTimeout(() => {
        const success = Math.random() > 0.5; // Random success/failure
        if (success) {
            resolve("Operation successful!"); // Fulfill the promise
        } else {
            reject(new Error("Operation failed!")); // Reject the promise
        }
    }, 1000); // Simulate 1 second delay
});

console.log("   Promise created. Waiting for result...\n");

// 2. USING .then() AND .catch()
console.log("2. Using .then() and .catch():");
myPromise
    .then(result => {
        console.log("   � ✓ Success:", result);
        return result.toUpperCase(); // Chain another operation
    })
    .then(processedResult => {
        console.log("   � ✓ Processed:", processedResult);
    })
    .catch(error => {
        console.log("   � ✗ Error:", error.message);
    });

console.log("");

// 3. PROMISE WITH RESOLVE AND REJECT VALUES
console.log("3. Promise with specific resolve/reject values:");
const dataPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = { id: 1, name: "John Doe", age: 30 };
        resolve(data); // Resolve with actual data
    }, 800);
});

dataPromise
    .then(data => {
        console.log("   Received data:", data);
        return data; // Pass data to next .then()
    })
    .then(userData => {
        console.log("   User name is:", userData.name);
    })
    .catch(err => {
        console.log("   Error fetching data:", err.message);
    });

console.log("");

// 4. ASYNC/AWAIT WITH TRY/CATCH
console.log("4. Using async/await with try/catch:");
async function fetchUserData() {
    try {
        console.log("   Fetching user data...");
        // Simulate API call
        const response = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id: 2, name: "Jane Smith", email: "jane@example.com" });
            }, 600);
        });
        
        console.log("   � ✓ User data received:", response);
        
        // Simulate another async operation
        await new Promise(resolve => setTimeout(resolve, 400));
        console.log("   � ✓ Additional processing complete");
        
        return response;
    } catch (error) {
        console.log("   � ✗ Error in async function:", error.message);
        throw error; // Re-throw if needed
    }
}

// Call the async function
fetchUserData()
    .then(user => {
        console.log("   Final result:", user.name);
    })
    .catch(err => {
        console.log("   Final error:", err.message);
    });

console.log("");

// 5. MULTIPLE PROMISES WITH PROMISE.ALL
console.log("5. Running multiple promises concurrently:");
async function fetchMultipleData() {
    try {
        console.log("   Fetching multiple data sources...");
        
        // Create multiple promises
        const promise1 = new Promise(resolve => 
            setTimeout(() => resolve("Data 1"), 300));
        const promise2 = new Promise(resolve => 
            setTimeout(() => resolve("Data 2"), 500));
        const promise3 = new Promise(resolve => 
            setTimeout(() => resolve("Data 3"), 400));
        
        // Wait for all to complete
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log("   � ✓ All data received:", results);
        
        return results;
    } catch (error) {
        console.log("   � ✗ Error fetching multiple data:", error.message);
    }
}

fetchMultipleData()
    .then(results => {
        console.log("   Combined results length:", results.length);
    })
    .catch(err => {
        console.log("   Error in multiple promises:", err.message);
    });

console.log("\n=== Demo Complete ===");

// Concept Summary:
// 1. PROMISE: Object representing eventual completion/failure of async operation
// 2. RESOLVE: Function to fulfill a promise with a value
// 3. REJECT: Function to reject a promise with an error
// 4. .then(): Handle fulfilled promise, can chain operations
// 5. .catch(): Handle rejected promise or errors in chain
// 6. ASYNC/AWAIT: Syntactic sugar for working with promises
// 7. TRY/CATCH: Handle errors in async functions
// 8. SETTIMEOUT: Simulate asynchronous behavior (network requests, timers)
// 9. PROMISE.ALL: Wait for multiple promises to complete