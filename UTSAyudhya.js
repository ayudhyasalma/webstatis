//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function () {
        menu.toggle();
    });
    menu.click(function () {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
        //display:block
    } else {
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll 
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0) {
            $("nav").addClass("logo-satu");
            $("nav img.logo-dua").show();
            $("nav img.logo-satu").hide();
        } else {
            $("nav").removeClass("logo-satu");
            $("nav img.logo-dua").hide();
            $("nav img.logo-satu").show();
        }
    })
});

function myFunction() {
    var txt;
    if (confirm("Pesan Terkirim!")) {
    txt = "You pressed OK!";
    } else {
    txt = "You pressed Cancel!"; 
    }
    document.getElementById("demo").innerHTML = txt;
}