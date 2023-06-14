function convertTemp(temperaturValue,conversionUnit){
    if(conversionUnit.toLowerCase()==='k'){
        console.log(temperaturValue+273)
    }
    else if(conversionUnit.toLowerCase()==='c'){
        console.log(temperaturValue-273)
    }
    else{
        console.log("Invalid")
    }
}
function main(){
    let temperaturValue=parseInt(prompt())
    let conversionUnit=prompt();
    convertTemp(temperaturValue,conversionUnit)
}
main()