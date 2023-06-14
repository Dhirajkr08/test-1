function maximumElement(arr,length){
    let maxi=arr[0]
    for (let i=0;i<=arr.length;i++){
        if(arr[i]>maxi){
            maxi=arr[i]
        }
    }
    console.log(maxi)
}
function main(){
    let n=parseInt(prompt())
    let arr=[]
    for (let i=1;i<=n;i++){
        arr.push(parseInt(prompt()))
    }
    maximumElement(arr,n)
}
main()