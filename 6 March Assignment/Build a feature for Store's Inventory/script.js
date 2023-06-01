// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.

items = {
    "soap":2,
    "shampoo":7,
    "conditioner":8, 
    "pedigree":10
}


const newItem = Object.keys(items).map((key)=>{
    return {
        key: key,
        value: items[key] * 80
    }
})

console.log(newItem)


