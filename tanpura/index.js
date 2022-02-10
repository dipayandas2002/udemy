var ar = ["A","A#", "B" ,"B#", "C","C#", "D","D#", "E","E#", "F","F#", "G","G#"];
var index = 0;
var playvalue = 0;


function addclass(id) {
    document.getElementById(`${id}`).classList.add("pressed")
    setTimeout(() => {
        document.getElementById(`${id}`).classList.remove("pressed");
    }, 100);
}


$('#down').on('click', function (e) {
    if (index != 0) {
        index--;
    }
    addclass("down")
    scalechange();
    var clickdown = 0;
    clickdown ++;
    audio[index+clickdown].pause();
    audio[index+clickdown].currentTime=0;;
    
});
$('#up').on('click', function (e) {
    if (index != 13) {
        index++;
    }
    addclass("up");
    scalechange();
    var clickup = 0;
    clickup++;
    audio[index-clickup].pause();
    audio[index-clickup].currentTime=0;;

});

var a = new Audio("sounds/a.mp3");
var b = new Audio("sounds/b.mp3");
var c = new Audio("sounds/c.mp3");
var d = new Audio("sounds/d.mp3");
var e = new Audio("sounds/e.mp3");
var f = new Audio("sounds/f.mp3");
var g = new Audio("sounds/g.mp3");

var as = new Audio("sounds/as.mp3");
var bf = new Audio("sounds/bf.mp3");
var cs = new Audio("sounds/cs.mp3");
var ds = new Audio("sounds/ds.mp3");
var es = new Audio("sounds/es.mp3");
var fs = new Audio("sounds/fs.mp3");
var gs = new Audio("sounds/gs.mp3");

var audio = [a,as,b,bf,c,cs,d,ds,e,es,f,fs,g,gs]


$(".play").on("click", function (e) {

    if (playvalue === 0) {
        playvalue = 1;
        audio[index].play();
        
    }
    else {
        playvalue = 0;
        audio[index].pause();
        audio[index].currentTime=0;
        
    }
    // console.log(playvalue)
    // console.log("play/pause")
    

    $(this).find('img').toggle();
    
})



function scalechange(){
    setInterval(() => {
        $("#scale").html(`<div class="img"> ${ar[index]} </div>`)
    }, 100);
    playvalue = 0;
    // audio[oldindex].pause();
    $(".play").html(`<img class="img" src="img/play-button.png" >
    <img class= "img "src="img/pause.png"  style="display: none;">`)
}