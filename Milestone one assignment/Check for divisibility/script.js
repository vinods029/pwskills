

array = [2,10, 15 ,25, 40 ,80]

answer=[]

for ( let i = 0 ; i < array.length ; i ++){
    if (array[i] % 3 === 0 &&  array[i] % 2 !== 0 ){
        answer.push(array[i])
    } else {
        continue;
    }
}

console.log(answer)