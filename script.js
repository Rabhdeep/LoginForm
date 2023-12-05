const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

//show input error message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkEmail(email){
    const re = /\S+@\S+\.\S+/;
    if(re.test(email.value)){
        showSuccess(email);
    }
    else{
        showError(email,'Email is not valid');
    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()===''){
            showError(input,`${getFieldName(input)} is Required`)
        }
        else{
            showSuccess(input);
        }
    });
}

function checkLength(input,min,max){
    if(input.value.length<min)
    {
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`)
    }
    else if(input.value.length>max)
    {
        showError(input,`${getFieldName(input)} must be less than ${max} characters`)
    }
    else{
        showSuccess(input);
    }
}

//Get fieldname
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
});