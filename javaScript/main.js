// function meldungMachen() {
//     // alert("Newsletteranfrage erfolgreich abgeschickt");
//     window.location.assign("http://www.google.com");
// }
window.addEventListener("load", init);

function init() {

    document.getElementById("submitbutton").addEventListener("click", validateForm);


}
function validateForm() {
    let email = document.validateForm.email.value;
    let human = document.validateForm.human.value;
    if(email === 'mrgoogle@gmail.com' || human === 'robot' || email ===''){
        alert("Bitte email Feld und i am human ausfüllen!")
    }
    else {
        alert ("Die Anmeldung für den Newsletter war erfolgreich.");
    }
}
function manage(txt) {
    var bt = document.getElementById('submitbutton');
    var ele = document.getElementById('email');
// Check the element type
    if (ele.type == 'email' && ele.value == '') {
        bt.disabled = true;    // Disable the button.
        return false;
    }
    else {
        bt.disabled = false;   // Enable the button.
    }
}
