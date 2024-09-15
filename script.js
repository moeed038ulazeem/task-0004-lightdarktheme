var changer = document.getElementById("hitMe");
changer.addEventListener("click", function() {
    var body1 = document.getElementById('b1');
    
    if (body1.style.backgroundColor === "black") {
        body1.style.backgroundColor = "white";
        changer.innerText = "Dark Mode";
        changer.style.backgroundColor = "black";
        changer.style.color = "white";
    } else {
        body1.style.backgroundColor = "black";
        changer.innerText = "Light Mode";
        changer.style.backgroundColor = "white";
        changer.style.color = "black";
    }
});
