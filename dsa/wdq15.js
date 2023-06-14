const printObject=()=>{
    const person={
        fname:"Dhiraj",
        lname:"Singh",
        age:25,
        address:{
            area:'Ganesh Path',
            street:'Boring Road',
            city:'Patna',
            state:'Bihar'

        },
        hobbies:['music','sports','movies']

    }
    console.log("persons fav hobbies is =",person.hobbies[2])
    console.log("person's state is =",person.address.state);
    const {age}=person;
    const {city}=person.address;
    console.log(age)
    console.log(city);

}
printObject();