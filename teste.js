
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
if (username=="curso") { window.location="templateafter/inicio.html"; done=1; }
if (done==0) { alert("Senha Invalida"); }
}