
// Discount calculator based on asked actual price and discounted price

let discountCal = (price, discountedp) => {
     let percent = (price - discountedp) / price * 100
     return Math.round(percent).toFixed(2)
}


console.log(discountCal(200,49))