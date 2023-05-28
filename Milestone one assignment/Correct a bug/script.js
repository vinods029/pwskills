function doublethenumber(cart){
    const correctCart = []

    for (let i =0;  i < cart.length; i++ ){
        let item = cart[i]*2
        correctCart.push(item)
    }
    return correctCart
}


list = [2,4,6,8,10,20]
console.log(doublethenumber(list))