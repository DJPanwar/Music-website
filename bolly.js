console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Heeriye Heeriye Aa", filePath: "songs/11.mp3", coverPath: "covers/11.jpg" },
    { songName: "Kesariya", filePath: "songs/12.mp3", coverPath: "covers/12.jpg" },
    { songName: "Zinda Banda", filePath: "songs/13.mp3", coverPath: "covers/13.jpg" },
    { songName: "Chaleya", filePath: "songs/14.mp3", coverPath: "covers/14.jpg" },
    { songName: "System Pe System", filePath: "songs/15.mp3", coverPath: "covers/15.jpg" },
    { songName: "Halki Si Barsaat", filePath: "songs/16.mp3", coverPath: "covers/16.jpg" },
    { songName: "Janiye", filePath: "songs/17.mp3", coverPath: "covers/17.jpg" },
    { songName: "Mahiya Jina Sohna", filePath: "songs/18.mp3", coverPath: "covers/18.jpg" },
    { songName: "Humraah", filePath: "songs/19.mp3", coverPath: "covers/19.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    let progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('input', () => {
    audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = songs[songIndex].filePath;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
