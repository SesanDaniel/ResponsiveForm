const form = document.getElementById('form');
const userFirstName = document.getElementById('firstName');
const userLastName = document.getElementById('lastName');
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');


form.addEventListener('submit', (e) => {
	e.preventDefault();

	inputCheck();

    if(inputCheck === displaySuccess){
    alert("Thank you! Your free trial is on it's way.... Kindly check your mailbox.")
    } else {
        alert('Invalid Input')
    }
    console.log(e)

});

function inputCheck() {
    const userFirstNameValue = userFirstName.value.trim();
    const userLastNameValue = userLastName.value.trim();
    const userEmailValue = userEmail.value.trim();
    const userPasswordValue = userPassword.value.trim();

    if(userFirstNameValue === ''){
        displayError(userFirstName, 'Firstname cannot be blank');
    } else {
        displaySuccess(userFirstName);
    }

    if(userLastNameValue === ''){
        displayError(userLastName, 'Last Name cannot be blank')   
    }else {
        displaySuccess(userLastName)  
    }

    if(userEmailValue === ''){
        displayError(userEmail, 'Email cannot be blank')
    } else if(!isEmail(userEmailValue)){
        displayError(userEmail, 'Email is not valid')
    } else {
        displaySuccess(userEmail)
    }

    if(userPasswordValue ===''){
        displayError(userPassword, 'Password cannot be blank')
    } else if(userPasswordValue.length < 6){
        displayError(userPassword, 'Password must be as least 6 characters')
    } else {
        displaySuccess(userPassword)
    }
}
    
    const btn  = document.getElementById('btn')

btn.addEventListener('click', (e) => {
	e.preventDefault();

    
    console.log(e)

});

function displayError(input, errorMessage) {
    const formInput = input.parentElement;
    const small = formInput.querySelector('small');
    small.innerText = errorMessage;
    formInput.className = "form-input error";
}

function displaySuccess(input) {
    const formInput = input.parentElement;
    formInput.className = "form-input success";
} 

function isEmail(userEmail){
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(userEmail);
 }
