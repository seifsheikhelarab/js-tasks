fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(products=>{
                let sum = products[0].price * 3
                    + products[3].price * 4
                    + products[5].price * 5
                console.log(`the total price is ${sum}$`);
            })