const id=document.getElementById("id");
const username=document.getElementById("username");
const email=document.getElementById("email");

document.addEventListener('DOMContentLoaded', function(){
    if (localStorage.getItem('token')){
        let user={};
    if (localStorage.getItem('user')) {
        user=JSON.parse(localStorage.getItem('user'))
    }
    id.innerHTML=user.id;
    username.innerHTML=user.username;
    email.innerHTML=user.email;
    } else {
        let currentUrl=window.location.href;
        let pageIndex=currentUrl.search('pages');
        const domain=currentUrl.substring(0, pageIndex);
        window.location.assign(`${domain}pages/login.html`);
       
    }
});