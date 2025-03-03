'use strict';

// TODO: Common Gotchas

class Button {
    constructor(text) {
        this.text = text;
        //! Wrong way to handle events
        this.element.addEventListener('click', function () {
            this.handleClick(); //! 'this' is wrong!
        });

        //? Right way - use arrow function to preserve 'this'
        this.element.addEventListener('click', () => {
            this.handleClick(); //? 'this' is correct
        });
    }

    handleClick() {
        console.log(this.text);
    }
}