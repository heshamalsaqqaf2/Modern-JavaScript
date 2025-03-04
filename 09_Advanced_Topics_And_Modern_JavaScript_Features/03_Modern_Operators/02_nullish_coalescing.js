'use strict';

// TODO: ------------------------- Nullish Coalescing (??) -------------------------
// The problem with ||
const count = 0 || 5;           // 5 (but we might want 0!)
const text = "" || "default";   // "default" (but we might want ""!)

// (??) only uses the default for null or undefined
const count2 = 0 ?? 5;                      // 0
const text2 = "" ?? "default";              // ""
const missing = null ?? "default";          // "default"
const missing2 = undefined ?? "default";    // "default"

// TODO: ------------------------- Real-World Examples -------------------------
//? ---------------- 1- User Settings ----------------
const userSettings = {
    theme: 'dark',
    notification: {
        email: false,
        sms: null,
        push: undefined
    }
};
// Get settings with good defaults
const theme = userSettings?.theme ?? 'light';
const emailNotifications = userSettings?.notification?.email ?? true;
const smsNotifications = userSettings?.notification?.sms ?? true;
const pushNotifications = userSettings?.notification?.push ?? true;

console.log(theme);                 // "dark" (uses existing value)
console.log(emailNotifications);    // false (uses existing value)
console.log(smsNotifications);      // true (null triggered default)
console.log(pushNotifications);     // true (undefined triggered default)

//? ---------------- 2- API Response Handling ----------------
const api = {
    getUser(id) {
        // Simulate API call
        if (id === 1) {
            return {
                name: 'John',
                address: {
                    city: 'New York'
                }
            };
        }
        return null;
    }
};
function getUserInfo(id) {
    const user = api.getUser(id);
    return {
        name: user?.name ?? 'Anonymous',
        city: user?.address?.city ?? 'Unknown'
    };
}
console.log(getUserInfo(1));  // { name: "John", city: "New York" }
console.log(getUserInfo(2));  // { name: "Anonymous", city: "Unknown" }

//? ---------------- 3- Function Parameters ----------------
function createUser(name, options) {
    const defaultOptions = {
        age: 25,
        country: 'Unknown',
        notifications: {
            email: true,
            sms: false
        }
    };
    return {
        name,
        age: options?.age ?? defaultOptions.age,
        country: options?.country ?? defaultOptions.country,
        notifications: {
            email: options?.notifications?.email ?? defaultOptions.notifications.email,
            sms: options?.notifications?.sms ?? defaultOptions.notifications.sms
        }
    };
}
const user1 = createUser('Hesham', {
    age: 30,
    notifications: {
        email: false
    }
});
console.log(user1);

/** 
 * @output
    {
        name: "Hesham",
        age: 30,
        country: "Unknown",
        notifications: {
            email: false,
            sms: false
        }
    }
*/
