

class Products{
    constructor(name, proce){
        this.name = name;
        this.price = this.price;

    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);

    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Products("Shirt", 19.99);
const product2 = new Products("Pants", 29.99);
const product3 = new Products("Hat", 14.99);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`total price: $${total.toFixed(2)}`)