
function validation() {

    let uNom =document.getElementById('nom');
    let uPrenom =document.getElementById('pren');
    let uTel =document.getElementById('tel');
    let uemail =document.getElementById('email');
    let datepp =document.getElementById("datep");
let udateloca =document.getElementById("datel");
let udateff = document.getElementById('datefl');
let carrs = document.getElementById('car');
let aff= document.getElementsByClassName('modal'); 
;

    {
    if (vnom(uNom)){
    if (vprenom (uPrenom))
    if(vemail(uemail)){
    
    if(vtele(uTel))
    if(rvdatep(datepp))
    if(vdateloca(udateloca)){
//   alert('Votre nom ' +uNom.value + '\nvotre prenom: '+uPrenom.value + '\nvotre telephone: '+uTel.value+ '\nvotre email: '+uemail.value+ '\nvotre date permis: '+datepp.value+'\ndate fin location : '+udateff.value+ '\nvotre voiture : '+carrs.value);
    
             modal.style.display='block';
             var div = document.getElementById('nomm');
             div.innerHTML += uNom.value;
             var div = document.getElementById('myDiv');
             div.innerHTML += uPrenom.value;
             var div = document.getElementById('myemail');
             div.innerHTML += uemail.value;
             var div = document.getElementById('mytel');
             div.innerHTML += uTel.value;
             var div = document.getElementById('mydatep');
             div.innerHTML += datepp.value;
             var div = document.getElementById('mydatef');
             div.innerHTML += udateff.value;
             var div = document.getElementById('myv');
             div.innerHTML += carrs.value;

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
    let telecaractere =  /^(06|05)[0-9]{8}/;
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
       
             function rvdatep(datepp){
                let datep= new Date(document.getElementById("datep").value);
         let dated = new Date();
         let pp=(dated-datep)/(1000*60*60*24);
         if (pp<=730){
           alert("désolé votre date de permis ne dépasse pas 2 ans")
           return false;
         }else {
           return true;
           
         }
         }
         function vdateloca(udateloca){
           let db =  new Date(document.getElementById("datel").value)/(1000*60*60*24);
           let df = new Date(document.getElementById("datefl").value)/(1000*60*60*24);
if(db >= df){
    alert("noon c'est possible de location par ce que il ya un problem dan la date de location")
    return false;
}else {
    return true;
}
         }
   
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}