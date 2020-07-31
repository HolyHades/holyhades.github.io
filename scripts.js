function vid1() {
    document.getElementById("player").src="https://www.youtube.com/embed/DJiGuFCzaFo";
    video.load();
}

function vid2() {
    document.getElementById("player").src="https://www.youtube.com/embed/DLX62G4lc44";
    video.load();
}

function getURL() {
    url = document.getElementById("input").value;
    embedurl = url.replace("watch?v=", "embed/");
    document.getElementById("player").src=embedurl;
    video.load();
    document.getElementById("input").value="";
}

/*
https://www.youtube.com/watch?v=vG3gXdU5Y08
https://www.youtube.com/embed/vG3gXdU5Y08
*/
