$(document).ready(function () {
    $(".content").hide()
    $(".prev").hide()
    $(".next").hide()
    $(".snackbar").hide()
})

$(".header").click(function () {
    $(".header").fadeOut("slow")
    $(".content").show()
})

$("#cars-3-photo").click(function () {
    $("#cars-3-schedule").show()
})

$(".prev").click(function () {
    plusSlides(-1)
})

$(".next").click(function () {
    plusSlides(1)
})

$("#collapsible").click(function () {
    if ($("#collapsible").is(":checked")) {
        $(".prev").show()
        $(".next").show()
    } else {
        $(".prev").hide()
        $(".next").hide()
    }
})

slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    slides = document.getElementsByClassName("slide-container-1");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

$("#cars-3-photo").click(function () {
    $("#snackbar-cars-3").show()
    $("#snackbar-cars-3").addClass("show")
    setTimeout(function () {
        $("#snackbar-cars-3").removeClass("show")
        $("#snackbar-cars-3").hide()
    }, 5000);
})

$("#fight-club-photo").click(function () {
    $("#snackbar-fight-club").show()
    $("#snackbar-fight-club").addClass("show")
    setTimeout(function () {
        $("#snackbar-fight-club").removeClass("show")
        $("#snackbar-fight-club").hide()
    }, 5000);
})

$("#shrek-2-photo").click(function () {
    $("#snackbar-shrek-2").show()
    $("#snackbar-shrek-2").addClass("show")
    setTimeout(function () {
        $("#snackbar-shrek-2").removeClass("show")
        $("#snackbar-shrek-2").hide()
    }, 5000);
})