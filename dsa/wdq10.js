function reverseString(str){
    var reversed=str.split('').reverse().join('');
    console.log(reversed)
}
function main(){
    let str=prompt()
    reverseString(str)
}
main()