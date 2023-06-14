const nameInput=document.getElementById('name');
const emailInput=document.getElementById('email');
const form=document.getElementById('form-group');
 form.addEventListener("submit",function(event){
    event.preventDefault();
    console.log('form Submitted!');

    
 });

 nameInput.addEventListener("mouseover",function(){
    nameInput.style.backgroundColor="lightblue";
    console.log('mouseover event on name input');
 });
 nameInput.addEventListener('mouseout',function(){
    nameInput.style.backgroundColor="lightgrey";
    console.log('mouseout event on name input');
 });

 emailInput.addEventListener("mouseover",function(){
    emailInput.style.backgroundColor='yellow';
    console.log('mouseover event is on email input');
 });

 emailInput.addEventListener('mouseout',function(){
    emailInput.style.backgroundColor='lightpink';
    console.log('mouseout event on email Input');
 });


 form.addEventListener('submit',function(event){
    event.preventDefault();
    const name=nameInput.value;
    const email=emailInput.value;
    if (name===""){
        console.log('name is required')
        return;
    }
    if (email===""){
        console.log('email is required')
        return;

    }
    console.log(name);
    console.log(email);

});