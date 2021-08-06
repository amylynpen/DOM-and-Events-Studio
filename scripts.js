// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let imgObj = document.getElementById('rocket');
    imgObj.style.position = 'absolute';
    imgObj.style.left = '220px';
    imgObj.style.bottom = '0px';
    let status = document.getElementById('flightStatus');
    let shuttleHeight = document.getElementById('spaceShuttleHeight');
    let bg = document.getElementById('shuttleBackground');

    let right = this.document.getElementById('right');
    right.addEventListener("click", function () {
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
    });

    let left = this.document.getElementById('left');
    left.addEventListener("click", function () {
        movement = parseInt(imgObj.style.left) - 10 + 'px';
        imgObj.style.left = movement;
    });

    let down = this.document.getElementById('down');
    down.addEventListener("click", function () {
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.lefy = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) -10000
    });


 });
