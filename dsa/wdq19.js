class User{
    static count=0
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
        User.count++
    }
    printNumberofUser(){
        console.log("currentNumberOfUser =",User.count)
    }
}
class MemberextendUser{
    constructor(username,email,password){
        super(username,email,password)
        this.memberShipValidtillDate= new Date(2024,9,24);
        this.package='membershipPackageName'
    }
    purchasemembership(membershipPackageName){
        this.package=membershipPackageName;
        if(this.package==="MonthlyPackage"){
            this.memberShipValidtillDate= new Date(2024,10,24);
        }
        else if(this.package==="YearlyPackage"){
            this.memberShipValidtillDate=new Date(2025,9,24);
        }

    }
    subscriptionActiveTill(){
        console.log(this.username+"is subscribed till"+this.memberShipValidtillDate.toDateString())
    }


}
function createNewStudent(username,email,password,membershipPackageName){

const Mike=new User("Mike","mike@gmail.com","Xyz")
  Mike.purchasemembership(membershipPackageName);
}
createNewStudent();  