class User{
    static count=0
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++
    }
    printNumberOfUser(){
        console.log("Number"+"of"+"users=",User.count)
    }
}
function createNewUser(){
    const Yash=new User("Yash","yash@gmail.com",123)
    Yash.printNumberOfUser()
    const user2=new User("Bunny","bunny@gmail.com",324)
    user2.printNumberOfUser()
    Yash.printNumberOfUser()
}
createNewUser()