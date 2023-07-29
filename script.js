console.log("welcome to spotify");
let songindex = 0;
let audioelement = new Audio('songs/1.mp3');
let masterplay = document.getElementById('masterplay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songitem'));
// let search = document.getElementsByClassName('search')


let songs = [
    { songname: "Tum kya Mile", filepath: "songs/1.mp3", coverpath: "covers/1.jpg" },
    { songname: "Kabira", filepath: "songs/2.mp3", coverpath: "covers/2.jpg" },
    { songname: "Tere vaaste", filepath: "songs/3.mp3", coverpath: "covers/3.jpg" },
    { songname: "Phir aur kya", filepath: "songs/4.mp3", coverpath: "covers/4.jpg" },
    { songname: "Apna bana le", filepath: "songs/5.mp3", coverpath: "covers/5.jpg" },
    { songname: "Tu mileya", filepath: "songs/6.mp3", coverpath: "covers/6.jpg" },

]
9
// yeh mne html se le li  idhar se bhi le skte h 
// songitems.forEach((element , i)=>{
//      element.getElementsByTagName('img')[0].src = songs[i].coverpath;
//      element.getElementsByClassName('songname')[0].innerText = songs[i].songname;
// })


// mtlb koi bhi audio play vaale pae click kre toh yeh ho
masterplay.addEventListener('click', ()=>{
    /*ya toh audio element paused h || ya audio element start hi nhi  hua h*/
    // console.log('chal raha hai');
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
audioelement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100) /*  P=(CT/DU)X100  */
    myprogressbar.value = progress;

})

// mtlb koi bhi gaane ko aage peeche change kre toh yeh ho
myprogressbar.addEventListener('change', ()=>{
    audioelement.currentTime = myprogressbar.value * audioelement.duration / 100; /*  CT=P*DU/100     */

})

// upar vaale play krne ke option h unko play kr dega yeh makeAllPlays ka yehi role hai yaha pr
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
//     Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
//         element.classList.remove('fa-play-circle');
//         element.classList.add('fa-pause-circle');
// })
}

// mtlb play krne vaale button h unpe click krte hi play ho jae uske liye apn ne makeallplays function bnaya h
Array.from(document.getElementsByClassName('songitemplay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        console.log(e.target);//e.target se vo element mil jaega jisse apn ne play kra h
        makeAllPlays();
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songindex+1}.mp3`;//isse yeh pta chlega ki konsa gaana chalu kra h apn ne
        masterSongName.innerText = songs[songindex].songname;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
    })
})
// document.getElementsByClassName('search').addEventListener('search', () => {
//     console.log("chl rah ah")
//     if(Q(songname__icontains = search)){
    
//     }
// })
    
document.getElementById('next').addEventListener('click', () => {
    if (songindex >= 5) {
        songindex = 0;
    }
    else {
        songindex += 1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songname;
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})
document.getElementById('previous').addEventListener('click', () => {
    if (songindex <=0) {
        songindex = 0;
    }
    else {
        songindex -= 1;
    }
    audioelement.src = `songs/${songindex+1}.mp3`;
    masterSongName.innerText = songs[songindex].songname;//mtlb apn ne kabira song chalaye toh kabira hi likha aaye neeche uske aage vaala ya peeche vaala nhi likha aaye neeche
    audioelement.currentTime = 0;
    audioelement.play();
    gif.style.opacity = 1;
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
})

