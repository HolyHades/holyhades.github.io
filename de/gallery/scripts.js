function openNav() {
    document.getElementById("navmenu").style.width = "100%";
}

function closeNav() {
    document.getElementById("navmenu").style.width = "0";
}

function openModal1(){
    var modal = document.getElementById("modal1");
    var img = document.getElementById("img01");
    var modalImg = document.getElementById("image01");
    modal.style.display = "block";
    modalImg.src = "/Logo-Groß-Grau.png";
}

function openModal2(){
    var modal = document.getElementById("modal2");
    var img = document.getElementById("img02");
    var modalImg = document.getElementById("image02");
    modal.style.display = "block";
    modalImg.src = "/Logo-Groß-Weiß.png";
}

function close1() {
    var span = document.getElementById("close1")[0];
    modal1.style.display = "none";
}

function close2() {
    var span = document.getElementById("close2")[0];
    modal2.style.display = "none";
}