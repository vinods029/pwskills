
function rentCalculator(day , type){
    let total  
    if (type.toLowerCase() === "economy" ){
       total = day * 4000;
    } else if (type.toLowerCase() === "midsize"){
        total = day * 10000;
    }else if (type.toLowerCase() === "luxury") { 
         total = day * 20000;
    } else {
        return "Either no of days or car type is wrong"
    }

    return total
}


console.log(rentCalculator(20,"ECONOMY"))