'use strict';

// Let's create a more practical example - simulating a database operation:
function getUser(id) {
    return new Promise((resolve, reject) => {
        console.log(`🔃 Fetching users ${id}...`);

        setTimeout(() => {
            // Simulate random success/failure
            if (Math.random() > 0.1) { // 90% success rate
                const user = {
                    id: id,
                    name: 'Hesham',
                    age: 25,
                    email: 'heshsm@gmail.com',
                    address: {
                        country: 'Yemen',
                        city: 'Taiz',
                        street: '2025-Street',
                    }
                };
                resolve(user);

            } else {
                reject(new Error('Failed to fetch users.'));
            }
        }, 2000);
    });
}


getUser(1)
    .then((user) => {
        console.log('✅ Success Fetching Operation : ', user);
    }).catch((err) => {
        console.log('❌ Error Fetching Operation: ', err.message);
    }).finally(() => {
        console.log('Operation complete: [ success or failure ]')
    });

console.log(`Process Operation 2...`);
console.log(`Process Operation 3...`);
