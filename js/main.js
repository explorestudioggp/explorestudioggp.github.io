function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
function showAll() {
    var x = document.getElementById("photos");
    if (x.className === "photo") {
        x.className += " responsive";
        document.getElementById("show").innerHTML = "Show Less";
    } else {
        x.className = "photo";
        document.getElementById("show").innerHTML = "Show All";
    }
}
//preloader
var myVar;
function preload() {
    myVar = setTimeout(showPage, 3000);
}
function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
}
// go to top
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// send mail
function sendEmail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var message = document.getElementById("message").value;
    if (name && email && mobile && message) {
        Email.send({
            SecureToken: "56fc5615-193a-491c-98fa-abdb393a19a4",
            To: 'explorestudioggp@gmail.com',
            From: email,
            Subject: name + ", wants to get in touch with you",
            Body: "name : " + name + "<br>mobile: " + mobile + "<br>message: " + message
        }).then(
            message => alert("Thank you for enquiry. Admin will get in touch with you very soon. :)")
        );
    } else {
        document.getElementById("error").style.color = "yellow";
        document.getElementById("error").innerHTML = "Invalid form details";
    }
}