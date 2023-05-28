



function billSpiltter(people ,prices ){

    let  total = 0

    for (let i= 0 ; i < prices.length ; i++){
        total = total + prices[i]
    }

    let share = total/ people

    return {
        total:total,
        billPerPerson: share
    }
}


people = 5
prices = [100 ,200 , 400 ,400 ,300]
console.log(billSpiltter(people, prices)) 



