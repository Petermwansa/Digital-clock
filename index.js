let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// the setInterval inbuilt function is set to execute every one second
setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getHours() < 10 ? "0 " : "") + currentTime.getSeconds();

}, 1000)



