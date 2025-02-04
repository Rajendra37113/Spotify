// let currentSong = new Audio();

// async function getSongs() {
//     let a = await fetch("http://127.0.0.1:3000/songs/");
//     let response = await a.text();
//     console.log(response);

//     let div = document.createElement("div");
//     div.innerHTML = response;
//     let as = div.getElementsByTagName("a");
//     let songs = [];

//     for (let index = 0; index < as.length; index++) {
//         const element = as[index];
//         if (element.href.endsWith(".mp3")) {
//             songs.push(element.href.split("/songs/")[1]);
//         }
//     }
//     return songs;
// }

// const playMusic = (track) => {
//     currentSong.src = "/songs/" + track;
//     currentSong.play();
//     play.src = "pause.png";
// }

// async function main() {
//     // get the list of all songs
//     let songs = await getSongs();
//     console.log(songs);

//     // show all songs in the Playlist
//     let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0];
//     for (const song of songs) {
//         songUL.innerHTML += `<li> 
//                             <img class="invert" style="height: 30px;" src="music_icon.png" alt="">
//                             <div class="info">
//                                 <div>${song.replaceAll("%20", " ")}</div>
//                                 <div>Rajendra</div>
//                             </div>
//                             <div class="playnow">
//                                 <span>play now</span>
//                                 <img class="invert" src="playbutton2.png" alt="">
//                             </div>  
//                           </li>`;
//     }

//     // attach an event listener to all play now buttons
//     Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach((e) => {
//         e.addEventListener("click", (element) => {
//             console.log(e.querySelector(".info").firstElementChild.innerHTML);
//             playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim());
//         });
//     });

//     // attach an event listener to play  ,  next and previous button
//     play.addEventListener("click", () => {
//         if (currentSong.paused) {
//             currentSong.play();
//             play.src = "pause.png";

//         } else {
//             currentSong.pause();
//             pause.src = "play.png";
//         }
//     });
// }

// main();











