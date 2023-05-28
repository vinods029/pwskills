items = ["apple", "orange", "banana","orange", "grape", "banana", "apple", "peach"]


cart = ""

for (let i = 0; i < items.length; i++ ){
    if (cart.includes(items[i]) ){
        continue;
    } cart += items[i] + " "

}

console.log(cart)