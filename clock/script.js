setInterval(() => {
    let d = new Date()
    var hour = d.getHours()
    var min = d.getMinutes()
    var sec = d.getSeconds()
    
    var hr =30*hour + min/2;
    var mr = 6*min; 
    var sr = 6*sec;
    console.log(hr);

    document.querySelector(".hour").style.transform = `rotate(${hr}deg)`;
    document.querySelector(".min").style.transform = `rotate(${mr}deg)`;
    document.querySelector(".sec").style.transform = `rotate(${sr}deg)`;

}, 1000);