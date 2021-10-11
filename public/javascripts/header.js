let line = [];
line[0] = document.querySelector("#event1 > div")
line[1] = document.querySelector("#event2 > div")
line[2] = document.querySelector("#event3 > div")
line[3] = document.querySelector("#event4 > div")


document.getElementById("event1").addEventListener("mouseover", function () {line[0].style.width="100%"});
document.getElementById("event2").addEventListener("mouseover", function () {line[1].style.width="100%"});
document.getElementById("event3").addEventListener("mouseover", function () {line[2].style.width="100%"});
document.getElementById("event4").addEventListener("mouseover", function () {line[3].style.width="100%"});

document.getElementById("event1").addEventListener("mouseleave", function () {line[0].style.width="0%"});
document.getElementById("event2").addEventListener("mouseleave", function () {line[1].style.width="0%"});
document.getElementById("event3").addEventListener("mouseleave", function () {line[2].style.width="0%"});
document.getElementById("event4").addEventListener("mouseleave", function () {line[3].style.width="0%"});

