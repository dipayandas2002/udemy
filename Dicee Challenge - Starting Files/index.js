//random number generation
function random() {
    var r = (6 * Math.random() + 1);
    return flr = Math.floor(r);

}

document.querySelector(".img1").setAttribute("src", `images/dice6.png`);
document.querySelector(".img2").setAttribute("src", `images/dice6.png`);
var p1 = random()
var p2 = random()

    document.querySelector(".img1").setAttribute("src", `images/dice${p1}.png`);
    document.querySelector(".img2").setAttribute("src", `images/dice${p2}.png`);

    if (p1 > p2) {
        document.querySelector(".container h1").textContent = "player 1 wins"
    } else if (p2 > p1) {
        document.querySelector(".container h1").textContent = "player 2 wins"

    }
    else {
        document.querySelector(".container h1").textContent = "draw"
    }

