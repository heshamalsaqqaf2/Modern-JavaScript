'use strict';

class ShoppingCart {
    #items = new Map();

    addItem(item, quantity = 1) {
        const currentQuantity = this.#items.get(item.id) || 0;
        this.#items.set(item.id, currentQuantity + quantity);
    }
    removeItem(itemId, quantity = 1) {
        const currentQuantity = this.#items.get(itemId);
        if (!currentQuantity) {
            throw new Error('Item not in cart');
        }
        if (quantity >= currentQuantity) {
            this.#items.delete(itemId);
        } else {
            this.#items.set(itemId, currentQuantity - quantity);
        }
    }
    getQuantity(itemId) {
        return this.#items.get(itemId) || 0;
    }
    clear() {
        this.#items.clear();
    }
}

// Testing the Shopping Cart
function runTests() {
    // Test 1: Adding items
    console.log('Testing addItem...');
    const cart = new ShoppingCart();
    const item = { id: 1, name: 'Test Item' };

    cart.addItem(item, 2);
    console.assert(cart.getQuantity(1) === 2, 'Adding item failed');

    // Test 2: Adding same item multiple times
    cart.addItem(item);
    console.assert(cart.getQuantity(1) === 3, 'Adding additional quantity failed');

    // Test 3: Removing items
    console.log('Testing removeItem...');
    cart.removeItem(1, 2);
    console.assert(cart.getQuantity(1) === 1, 'Removing items failed');

    // Test 4: Removing too many items
    cart.removeItem(1, 5);
    console.assert(cart.getQuantity(1) === 0, 'Complete removal failed');

    // Test 5: Error handling
    console.log('Testing error handling...');
    try {
        cart.removeItem(999);
        console.assert(false, 'Should have thrown error for non-existent item');
    } catch (error) {
        console.assert(error.message === 'Item not in cart', 'Wrong error message');
    }

    console.log('All tests completed!');
}

runTests();