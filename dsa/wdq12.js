function minimuminArray(arr,length){
    let mini=arr[0]
    for (let i=0;i<=arr.length;i++){
        if (arr[i]<mini){
            mini=arr[i]
        }
    }
    console.log(mini)

}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for (let i=1;i<=n;i++){
        arr.push(parseInt(prompt()))
    }
    minimuminArray(arr,n)

}
main()
