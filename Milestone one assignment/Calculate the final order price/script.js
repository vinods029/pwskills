
cart = [{price:20,quantity:2}, {price:40,quantity:1} , {price:30,quantity:3},{price:10,quantity:5} ]
let total = 0;

const cartCalculator = (cart) => {
    let total = 0;

    for (let i = 0 ; i< cart.length; i++ ){
    
        total +=cart[i]["price"] * cart[i]["quantity"];
       
    }
    return total
}



console.log(cartCalculator(cart));



