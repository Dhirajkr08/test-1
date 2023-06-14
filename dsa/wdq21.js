const form=document.getElementById("myForm");
const nameInput=document.getElementById("name");
const emailInput=document.getElementById("email");
 form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log("form Submitted!")
 })

 nameInput.addEventListener("mouseover",function(){
   nameInput.style.backgroundColor="red";
    console.log("Mouseover event on Name Input");
 })
 nameInput.addEventListener("mouseout" ,function(){
   nameInput.style.backgroundColor="white";
   console.log("MouseOut event on Name Input")
 })
 emailInput.addEventListener("mouseover",function(){
   emailInput.style.backgroundColor="pink";
   console.log("mouseover event on email Input")
 })

 emailInput.addEventListener("mouseout",function(){
   emailInput.style.backgroundColor="yellow";
    console.log("MouseOut event on Email Input")
 })

 //form validation
 form.addEventListener("submit",function(event){
    event.preventDefault();
    const name=nameInput.value;
    const email=emailInput.value;
    if (name=== ""){
        console.log("Name is required")
        return;
    }
    if (email===""){
        console.log("email is required");
        return;
    }
    console.log(name)
    console.log(email)
 })