let toggle = 0;
document.querySelector(".icons").addEventListener("click", function () {

    if (toggle === 0) {

        document.querySelector(".start img").style.bottom = '0px'
        toggle = 1;
    } else {
        document.querySelector(".start img").style.bottom = '-800px'
        toggle = 0;

    }

})
