import { validate } from "./function.js";

const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');
const email=document.getElementById('email');



form.addEventListener('submit', function(e) {
    e.preventDefault();
  if (validate(username, email, password, repassword)) {
    const user={
        username: username.value,
        password: password.value,
        email: email.value,
    }

    fetch("https://auth-rg-69.onrender.com/api/auth/signup", {
        method: "POST",
        headers: {
            'Content-type': "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(data => {
       if (data.message=="Failed! Username is already in use!") {
      alert(data.message);
      username.focus();
      repassword.value='';
       }
       if(data.message=="Failed! Email is already in use!") {
        alert(data.message);
        email.focus();
        repassword.value='';
       }
       if (data.message=="User registered successfully") {
        form.reset();
        let currentUrl=window.location.href;
        let pageIndex=currentUrl.search('pages');
        const domain=currentUrl.substring(0, pageIndex);
        window.location.assign(`${domain}pages/login.html`);
        
       }
    })
    .catch (err =>{
        console.log(err);
    })
  }
})