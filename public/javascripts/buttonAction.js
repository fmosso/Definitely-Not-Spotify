/**
 * Created by Blopa on 18-08-2016.
 */
function playSong(source){
    jQuery(document).ready(function($) {
        $.get("/playsong/" + source, function(data) {
            document.getElementById("audio-player").src = data
            document.getElementById("audio-player").autoplay = true;
            document.getElementById("audio-player").load()
        });
        $("#song-name").load("/getsong/" + source);
    });
}

function removeSong(source){
    jQuery(document).ready(function($) {
        $.get("/remove/" + source, function() {
            location.reload();
        });
    });
}

function ajaxmenuplaylist() {
    $("#Lists").load("/menuplaylist");
}

function ajaxplaylist(song) {
    $("#adding-playlist-"+song).load("/addingplaylist/" + song);
}

function addSongToList(song, playlist) {
    $.get("/addsong/"+song+"/"+playlist, function () {
        alert("Canción añadida")
    })
    console.log(playlist);
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}