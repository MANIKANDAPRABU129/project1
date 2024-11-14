var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
    sidenav.style.display="block"
}
function closeNavbar(){
    sidenav.style.display="none"
}




$(document).ready(function(){
    $(".cart").click(function(){
        alert("this item is selected...")

    });
});

$(document).ready(function(){
    $(".main-btn").click(function(){
        alert("this page is not work")

    });
});

$(document).ready(function(){
    $("#menu123").click(function(){
        alert("add cart succesfully")

    });
});