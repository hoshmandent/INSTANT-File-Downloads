var timeOut;
function myLoder() {
    timeOut = setTimeout(showConfirmedMessage, 569);
}

function showConfirmedMessage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("confirmed").style.display = "block";
}

$('.confirmed .close').click(function(){
    $('.confirmed').hide();
});
