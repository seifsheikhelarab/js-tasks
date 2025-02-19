# Fake Store API – Total Price Calculation

## Overview
Seif visited the Fake Store and purchased:
- **3 items** of the product with **ID 1**  
- **4 items** of the product with **ID 4**  
- **5 items** of the product with **ID 3**  

He needs help calculating the **total price** for these items using the **Fake Store API**.

## Instructions
1. **Clone** this repository to your local machine:
   ```bash
   git clone https://github.com/<your-username>/fake-store-total-price.git
   ```
2. **Install dependencies** (if any) by running:
   ```bash
   npm install
   ```
3. **Run the script** to calculate the total price:
   ```bash
   node index.js
   ```
4. The **total price** will be displayed in the console.

## Fake Store API Reference
- The [Fake Store API](https://fakestoreapi.com/) provides mock data for products.
- Each product object includes an `id`, `title`, `price`, `description`, `category`, and `image`.

## How It Works
1. **Fetch** product details from the Fake Store API using their respective IDs.
2. **Multiply** each product’s price by the quantity purchased.
3. **Sum** the results to find the total cost of all products.
4. **Log** the total to the console.
