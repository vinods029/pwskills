
function colorMixer (color1 , color2){
    switch (true) {
        case (color1 === 'red' && color2 === 'blue') || (color1 === 'blue' && color2 === 'red'):
            return "purple";
        
        
        case (color1 === 'red' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'red'):
            return "orange";
        
            case (color1 === 'blue' && color2 === 'yellow') || (color1 === 'yellow' && color2 === 'blue'):
                return "green";

        default:
            return "Invalid color combination";
            
    }
    
}