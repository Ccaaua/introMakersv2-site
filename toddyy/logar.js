
function Login(){
var done=0;
var username=document.login.username.value;
username=username.toLowerCase();
if (username=="robson") { window.location="robsoncriptografia/inicio.html"; done=1; }
if (done==0) { alert("Senha Invalida"); }
}