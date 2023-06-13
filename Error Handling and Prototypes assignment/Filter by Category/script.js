// Write a function that takes an array of products and returns a function that filters the array by a given product
// category. The function must filter an eCommerce products array by a specific category. The closure filters
// products using the filter() method. Finally, it returns a new array containing only the products with the same
// category as the input.


function filterByCategory(products){
    
    function filter(category){
        return products.filter(products => products.category === category)
    }

    return filter

}



var product = [
    {name: "Shirt", category:"Clothing"},
    {name: "Pants", category:"Clothing"},
    {name: "Hat", category:"Accessories"},
    {name: "Sunglasses", category:"Accessories"}
]

var clothingProducts = filterByCategory(product)

console.log(clothingProducts('Accessories'));