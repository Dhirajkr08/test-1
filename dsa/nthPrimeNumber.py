def printPrime(n):
    x=2
    arr=[]
    count=0
    num=str(n)
    while len(arr)<n:
        flag=True
        for i in range(2,x):
            if(x%i)==0:
                flag=False
        if flag==True:
            arr.append(x)
            count+=1
        if count==n:
            break
        x+=1
    return arr
def main():
    n=int(input())
    print(printPrime(n))
main()
