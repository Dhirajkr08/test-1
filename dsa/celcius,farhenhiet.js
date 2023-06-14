function convertTemp(tempValue,conversionUnit){
    if (conversionUnit.toLowerCase()==='c'){
        return (tempValue*9/5)+32;
    }
    else if (conversionUnit.toLowerCase()==='f'){
        return (tempValue-32)*5/9;
    }
    else{
        return "invalid!"
    }
}
function main(){
    let tempValue=parseInt(prompt())
    let conversionUnit=prompt()
    console.log(convertTemp(tempValue,conversionUnit))

}
main();