'use strict';

// Using break
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

// Using continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log(i);
}
