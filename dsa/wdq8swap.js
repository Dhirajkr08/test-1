function swapTwo(a,b){
    let temp=a;
    a=b;
    b=temp;
    console.log(a);
    console.log(b);
}
function main(){
    let a=parseInt(prompt());
    let b=parseInt(prompt());
    swapTwo(a,b);
}
main();