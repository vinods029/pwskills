
function getPerson(param){

    try {
        if (typeof param ==="object" && param !== null && typeof param.name ==='string' && typeof param.age=== 'number'){
            return `Name: ${param.name} , Age: ${param.age.toString()}`
        }
        throw new Error ("Invalid Input")
    } catch(err) {
        return err.message
    }

}


    


obj = ({name:'Mithun', age:60})
console.log(getPerson(obj));