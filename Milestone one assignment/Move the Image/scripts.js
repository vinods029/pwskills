
const image = document.getElementById("image");

let positionx = 0;
let positiony = 0;
let step = 10 ;


function handleKeyDown(event){
    const keyCode = event.keyCode;

    // left Key
    if (keyCode=== 37){
        positionx -= step;
     // up Key
    }else if (keyCode===38){
        positiony -= step
    // right Key
    }else if (keyCode===39){
        positionx +=step
    // down key
    }else if (keyCode===40){
        positiony += step
    }

    image.style.left = `${positionx}px`
    image.style.top =`${positiony}px`
}


document.addEventListener('keydown',handleKeyDown);