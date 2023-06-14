/*function ValidParenthesis(n){
    let stack=[];
    let d={"]":"[",")":"(","}":"{"};
    for(let i of n){
        if(d[i]){
            stack.push(d[i]);
        }else{
            if (stack.length===0 || stack.pop()!==i){
                return false;
            }
        }
    }
    return stack.length===0;
}
function main(){
    let n=prompt()
    let output=ValidParenthesis(n);
    if(output){
        console.log(true);

    }else{
        console.log(false);
    }
}
main();*/

var isValid=function(s){
    while (s.length){
        let temp=s;
        s=s.replace("()","");
        s=s.replace("{}","");
        s=s.replace("[]","");
        if (s==temp){
            return false;
        }
    }
    return true;
}
function main(){
    let s=prompt();
    console.log(isValid(s));
}
main()