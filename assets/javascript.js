

function validation() {

let uNom =document.getElementById('nom');
let uPrenom =document.getElementById('pren');
let uTel =document.getElementById('tel');
let uemail =document.getElementById('email')
let umot =document.getElementById("mo")
{
if (vnom(uNom)){
if (vprenom (uPrenom))
if(vemail(uemail)){

if(vtele(uTel))
if(vmot(umot)){
alert('Merci Pour Votre Inscription!');
}   

}
}
}
return false; 
}

function vnom(uNom){
let caractere = /^[A-Za-z]/;
if (uNom.value.match(caractere)){
  return true
} else {
alert('Votre Nom est invalide ! ');
return false;
}
}
function vprenom(uPrenom){
let caractere = /^[A-Za-z]/;
if (uPrenom.value.match(caractere)){
  return true
} else {
alert('Votre Prenom est invalide ! ');
return false;
}
}

function vtele (uTel){
let telecaractere = /^[0-9]/;
if(uTel.value.match(telecaractere)){
 return true;
}else{
 alert('Votre numero de téléphone est invalide');
 return false;
}

}
function vemail(uemail) {
          var emailID = document.myForm.EMail.value;
          atpos = emailID.indexOf("@");
          dotpos = emailID.lastIndexOf(".");
         
          if (atpos < 1 || ( dotpos - atpos < 2 )) {
             alert("Please enter correct email ID")
            document.myForm.EMail.focus() ;
             return false;
          }
          return true ;
       }
       function vmot() {
 
        var a = document.getElementById("mo").value;
        var b = document.getElementById("cmo").value;

        if (a!=b) {
          alert("Les mots de passe ne correspondent pas.");
          return false; }
        else {
          
          return true; }
    
        }