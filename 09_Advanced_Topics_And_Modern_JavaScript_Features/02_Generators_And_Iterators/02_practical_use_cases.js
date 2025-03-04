'use strict';

// TODO: -------------------- Creating ID Generators --------------------
function* createIds() {
    let id = 1;
    while (true) {
        yield `user_${id}`;
        id++;
    }
}
const userIds = createIds();

console.log(userIds.next().value); // "user_1"
console.log(userIds.next().value); // "user_2"
console.log(userIds.next().value); // "user_3"

//TODO: -------------------- Pagination Helper --------------------
function* paginate(array, pageSize) {
    for (let i = 0; i < array.length; i += pageSize) {
        yield array.slice(i, i + pageSize);
    }
}
const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
const pages = paginate(items, 3);

console.log(pages.next().value); // ['a', 'b', 'c']
console.log(pages.next().value); // ['d', 'e', 'f']
console.log(pages.next().value); // ['g']

//TODO: -------------------- Creating Range Function --------------------
function* range(start, end, step = 1) {
    let current = start;
    while (current <= end) {
        yield current;
        current += step;
    }
}

// Use it like Python's range
for (const num of range(0, 10, 2)) {
    console.log(num); // 0, 2, 4, 6, 8, 10
}