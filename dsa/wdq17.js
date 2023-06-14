function Person(firstname,lastname,age,sex){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.sex=sex;
}
Person.prototype.printFullName=function(){
    console.log(this.firstname,this.lastname);
};

Person.prototype.findEligibleOrNot= function(minAge){
    if (this.age>minAge){
        console.log("ELigible")
    }
    else{
        console.log("Not ELigible")
    }
}
function createNewStudent(){
    const person1= new Person("DHiraj","Singh",26,"M");
    const Person2=new Person("AMit","Singh",23,'M');
    person1.printFullName();
    person1.findEligibleOrNot(18);
    Person2.printFullName();
    Person2.findEligibleOrNot(18);
}
createNewStudent();
