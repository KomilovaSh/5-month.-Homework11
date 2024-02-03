import { validateLogin } from "./function.js";

const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');


form.addEventListener('submit', function(e) {
    e.preventDefault();
  if (validateLogin(username, password)) {
    let user={
        username: username.value,
        password: password.value,
    }

    fetch("https://auth-rg-69.onrender.com/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-type": "aplication/json"
        },
        body: JSON.stringify(user)
    })
    .then (res => res.json())
    .then (data =>{
        if(data.message=="User not found"){
              username.focus();
              alert(data.message);
              password.value='';
        }
        if(data.message=="Invalid Password") {
             password.focus();
             alert(data.message);

        }
        if(data.id && data.username) {
           
             form.reset();
             localStorage.setItem("token", data.accessToken);
             localStorage.setItem('user', JSON.stringify(data));
             let currentUrl=window.location.href;
             let pageIndex=currentUrl.search('pages');
             const domain=currentUrl.substring(0, pageIndex);
             window.location.assign(`${domain}pages/index.html`);
            
             
        }
    })
    .catch (err =>{
        console.log(err);
    })
  }
})