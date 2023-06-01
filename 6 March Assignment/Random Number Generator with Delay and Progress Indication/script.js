// 2. Random Number Generator with Delay and Progress Indication:
// The goal of this program is to generate a random number after a delay of 3 seconds, and store the delay in a
// variable so can be modified. The program displays a message every second indicating the time remaining
// until the random number is generated and then outputs the generated number.



const delay = 3
let timer = delay

const countDown = setInterval(()=>{
    console.log(`New number will be generated in ${timer}`);
    timer =  timer-1;

    if (timer===0){
        clearInterval(countDown)
        randomNumberGenerator();

    }

},1000)


function randomNumberGenerator() {
    setTimeout(()=>{
    const randomNumber =Math.floor(Math.random() * 100) 
    console.log(`Random number generated: ${randomNumber}`)
}, delay * 1000)
}  




