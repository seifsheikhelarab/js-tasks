interface Item {
    id: number;
    name: string;
    price: number;
    quantity: number;
};

class ShoppingCart {
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    calculateTotal(): number {
      return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    listItems(): void {
        console.log("Items in cart:");
        this.items.forEach(item => {
        console.log(`${item.name} x${item.quantity} => ${item.price}egp each`);
    });
    }
}

const cart = new ShoppingCart();

cart.addItem({ id: 1, name: 'apple', price: 15, quantity: 3 });
cart.addItem({ id: 2, name: 'Banana', price: 7, quantity: 5 });
cart.addItem({ id: 3, name: 'orange', price: 125, quantity: 2 });

cart.listItems();

cart.removeItem(2);

cart.listItems();

const total = cart.calculateTotal();
console.log(`Total price: ${total.toFixed(2)}egp`);