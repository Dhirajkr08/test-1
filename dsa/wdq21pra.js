const form=document.getElementById('form-group');
const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
form.addEventListener("submit" ,function(event){
    event.preventDefault();
    console.log("form Submitted!")
})

nameInput.addEventListener("mouseover",function(){
    nameInput.style.backgroundColor="yellow";
    console.log("mouseover event on name Input")

})
nameInput.addEventListener("mouseout",function(){
    nameInput.style.backgroundColor="grey";
    console.log("mouseout event is on name Input")
})

emailInput.addEventListener("mouseover",function(){
    emailInput.style.backgroundColor="lightblue";
    console.log("mouseover event is on emailInput")

})

emailInput.addEventListener("mouseout",function(){
    emailInput.style.backgroundColor='white';
    console.log("mouseout event on email Input")
})


form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=nameInput.value;
    const email=emailInput.value;
    if (name===""){
        console.log("Name is required")
        return;
    }
    if (email===""){
        console.log("email is required!")
        return;
    }
    console.log(name);
    console.log(email);

})