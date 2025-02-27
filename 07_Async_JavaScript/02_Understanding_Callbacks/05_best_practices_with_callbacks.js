'use strict';

// TODO: ------------------- Keep callbacks simple -------------------
// Instead of
button.addEventListener('click', function () {
    // 50 lines of code here...
});

// Better
function handleClick() {
    // Handle click logic

}
button.addEventListener('click', handleClick);

// TODO: ------------------- Use meaningful names -------------------
// Not clear
getData(function (d) { });

// Better
getData(function handleUserData(userData) { });

// TODO: ------------------- Handle errors appropriately -------------------
function processData(data, successCb, errorCb) {
    if (!data) {
        errorCb(new Error('No data provided'));
        return;
    }
    successCb(data);
}