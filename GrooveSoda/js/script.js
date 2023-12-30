const menu_btn = document.querySelector('.hamburger');
const mobile_menu=document.querySelector('.mobile-nav');


menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
})






/* Old Hamburger JS
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
})) */

function validate()
{
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;

  if(username=="admin" && password=="user")
  {
    alert("login successful");
    window.location.replace("account.html");
    return false;
  }
  else
  {
    alert("login failed");
  }
}

/*
function auth() {
  var username=document.getElementById("username").value;
  var password=document.getElementById("password").value;

  if(username=="admin" && password=="user") {
    window.location.replace("logout.html");
  }
}
else
  {
    alert("login failed");
    return;
  }*/









/* for img fade in
$(window).load(function () {
    $('#img1').fadeIn(3000);
  });
  */