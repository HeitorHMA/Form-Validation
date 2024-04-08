export default function checkPassword(){
    const userPassword = document.querySelector("#userPassword")
    const userPasswordConfirm = document.querySelector("#userPasswordConfirm")
    if(userPasswordConfirm.value != userPassword.value){
        userPasswordConfirm.setCustomValidity("The passwords don't match");
    }
    else{
        userPasswordConfirm.setCustomValidity("");
    }
}