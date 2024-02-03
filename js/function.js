const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


function validate (username, password, email, repassword) {


    if(!username.value) {
        alert("Username is empty");
        username.focus();
        return false;
    }



    if(username.value.trim().length<3) {
        alert("Username length must be more than 3 chart!");
        username.focus();
        return false;
    }

    if(!email.value) {
        alert("Email is empty");
        email.focus();
        return false;
    }

    if(!password.value) {
        alert("Password is empty")
        password.focus();
        return false;
    }


    if(validateEmail(email.value)) {
        email.focus();
        alert("Email is invalid");
        return false;
    }

  
    if(!repassword.value) {
        alert("Repassword is empty");
        repassword.focus();
        return false;
    }

    if(password.value != repassword.value) {
        password.focus();
        repassword.value='';
        alert("Password and repassword is not same");
        return false;
    }

    if(password.value.trim().length <3) {
        password.focus();
        alert("Password length need to be more than 3 char!");
        return false;
    }
    return true;

}

function validateLogin (username, password) {

    if(!username.value) {
        alert("Username is empty");
        username.focus();
        return false;
    }



    if(username.value.trim().length<3) {
        alert("Username length must be more than 3 chart!");
        username.focus();
        return false;
    }

    if(!password.value) {
        alert("Password is empty")
        password.focus();
        return false;
    }


    if(password.value.trim().length <3) {
        password.focus();
        alert("Password length need to be more than 3 char!");
        return false;
    }
    return true;

}

export {validate, validateLogin}