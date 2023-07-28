console.log("welcome to spotify");
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songitem'));


let songs = [
    { songname: "Tum kya Mile", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Kabira", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "Tere vaaste", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Phir aur kya", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Apna bana le", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "Tu mileya", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },

]
songitems.forEach((element , i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText = songs[i].songname;

})

masterplay.addEventListener('click', ()=>{
    /*ya toh audio element paused h || ya audio element start hi nhi  hua h*/
    if(audioelement.paused || audioelement.currentTime <= 0){   
       audioelement.play();/*agr audio element play nhi ho raha toh usko play krdo */

        // yeh neeche stop krne ke liye bnaya h
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioelement.pause();/*agr audio element chl raha h toh usko pause krdo*/
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle");
        gif.style.opacity = 0;
    }
})
audioelement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100) /*  P=(CT/DU)X100  */
    myprogressbar.value = progress;
})
myprogressbar.addEventListener('change', () => {
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100; /*  CT=P*DU/100     */

})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex}.mp3`;
        masterSongName.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    })
})
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 5) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <=5) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})

