let myphoto = document.getElementById("myphoto");

myphoto.onmouseenter = () => {
    myphoto.src = "./resources/Images/portrait-pink.jpg";
}
myphoto.onmouseleave = () => {
    myphoto.src = "./resources/Images/portrait.jpg";
}