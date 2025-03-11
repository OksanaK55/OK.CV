const burger = document.querySelector('.burger');
const navLink = document.querySelector('nav');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const userEmail = document.getElementById('userEmail');
const phoneNumber = document.getElementById('phoneNumber');
const userMessage = document.getElementById('userMessage');
const myCheck = document.getElementById('myCheck');
const btnSubmit = document.getElementById('btn_submit');
const inputFields = document.getElementsByClassName("form-control");

burger.addEventListener('click', openMenu);

function openMenu(){
    burger.classList.toggle('active');
    navLink.classList.toggle('active');
}


for (const item of inputFields){
item.addEventListener("blur", (event) => {
validateForm(event);
})};



const setError = (element, message) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = message;
    element.classList.add("invalid");
    element.classList.remove("valid");
  };
  
  const setValid = (element) => {
    const errorSection = element.parentElement.querySelector(".error");
    errorSection.innerText = "";
    element.classList.remove("invalid");
    element.classList.add("valid");
  }; 

const validatefirstName = (firstName) =>{
      const regex = /[a-z]/; 
   if(firstName.value === "") {
    setError(firstName, "First Name is required") 
   }
   else if (!regex.test(firstName.value)) {
    setError(firstName, "First Name is incorrect");
  } else {
    setValid(firstName);
  }     
};   

const validatelastName = (lastName) =>{
    const regex = /[a-z]/; 
 if(lastName.value === "") {
  setError(lastName, "Last Name is required") 
 }
 else if (!regex.test(lastName.value)) {
  setError(lastName, "Last Name is incorrect");
} else {
  setValid(lastName);
}     
};   



const validateuserEmail = (userEmail) =>{
    const regex = (/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/); 
 if(userEmail.value === "") {
  setError(userEmail, "Email is required") 
 }
 else if (!regex.test(userEmail.value)) {
  setError(userEmail, "Email is incorrect");
} else {
  setValid(userEmail);
}     
};  

const validatePhoneNumber = (phoneNumber) =>{
  const regex =(/^[0-9\-\+]{9,15}$/); 

  if(phoneNumber.value === "") {
    setError(phoneNumber, "Phone Number is required") 
   }
   else if (!regex.test(phoneNumber.value)) {
    setError(phoneNumber, "Phone Number is incorrect");
  } else {
    setValid(phoneNumber);
  }     
  };  

  const validateMessage = (userMessage) =>{
    const regex = /[a-z]/; 
    if(userMessage.value === "") {
      setError(userMessage, "Message is required") 
     }
     else if (!regex.test(userMessage.value)) {
      setError(userMessage, "Message is incorrect");
    } else {
      setValid(userMessage);
    }     
  }

  btnSubmit.onclick = function(){
    if(myCheck.checked){
      setValid(myCheck)
      }
     else {
      setError(myCheck, "is incorrect");
      
  }}


const validateForm = (event) => {
  switch (event.target.id){
    case "firstName":
        validatefirstName(event.target);
        break;
    case "lastName":
      validatelastName(event.target);
      break;
    case "userEmail":
      validateuserEmail(event.target);
      break;
    case "phoneNumber":
      validatePhoneNumber(event.target);
      break;
    case "userMessage":
      validateMessage(event.target);
      break;
      
      case "myCheck":
        onclick(event.target);
        break;


      default:
  alert("Validation error!");

      
  }
};


document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let firstNameValue = document.getElementById("firstName").value.trim();
  let lastNameValue = document.getElementById("lastName").value.trim();
  let userEmailValue = document.getElementById("userEmail").value.trim();
  let phoneNumberValue = document.getElementById("phoneNumber").value.trim();
  let userMessageValue = document.getElementById("userMessage").value.trim();
  let myCheck = document.getElementById("myCheck");
  
  const errorSection = document.querySelector(".error");

  if (!firstNameValue || !lastNameValue || !userEmailValue || !phoneNumberValue || !userMessageValue || !myCheck.checked){
    errorSection.textContent = "Please fill in all the fields!";
    return;
  }

  errorSection.textContent = "";
  alert("The form has been successfully submitted!");
});