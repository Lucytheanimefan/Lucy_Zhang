var s = skrollr.init();


function dropDownInteractivity() {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }
}

dropDownInteractivity();

$("#hardware li").addClass("load")

