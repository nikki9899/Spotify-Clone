console.log("Welcome to Spotify")
//initialize event
let songIndex=0;
let audioElement=new Audio("songs/0.mp3");
let masterPlay=document.getElementById('playButton');
let progressBar=document.getElementById('progressbar');
let Effect=document.getElementById('effect');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[
    {songName:"Scene Change-Qaab,Rebel,Abix", filePath:"songs/0.mp3",coverPath:"themes/scene change.png"},
    {songName:"AFSANAY  Young Stunners  Talhah Yunus  Talha Anjum", filePath:"songs/1.mp3",coverPath:"themes/Afsanay.png"},
    {songName:"Imran Khan- On My Way X Meez", filePath:"songs/2.mp3",coverPath:"themes/On my way.jpg"},
    {songName:"MC STΔN -EK DIN PYAAR  TADIPAAR", filePath:"songs/3.mp3",coverPath:"themes/Tadipaar.jpg"},
    {songName:"Qaab X Abix  Prime Time", filePath:"songs/4.mp3",coverPath:"themes/scene change.png"},
    {songName:"Seedhe Maut  Namastute", filePath:"songs/5.mp3",coverPath:"themes/Namastute.jpg"}
]
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

}

)

// audioElement.play();
//handle play/pause
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
   audioElement.play();
   masterPlay.classList.remove('fa-circle-play');
   masterPlay.classList.add('fa-circle-pause');
   masterSongName.innerText=songs[songIndex].songName;
   Effect.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-puase');
        masterPlay.classList.add('fa-circle-play');
        masterSongName.innerText="";
        Effect.style.opacity=0;
        }
       

})
//listen event
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    progressBar.value= progress;

})
progressBar.addEventListener('change',()=>
{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>
{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
    {
        
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        masterSongName.innerText="";


    })



}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>
{
    element.addEventListener('click',(e)=>
    {
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=songs[songIndex].filePath;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        Effect.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

        

    })
    
})

document.getElementById('Next').addEventListener('click',()=>
{
    if(songIndex>=5)
    {
        songIndex=0;
    }
    else
    {
        songIndex+=1;
    }
    audioElement.src=songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    Effect.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

}

)

document.getElementById('Previous').addEventListener('click',()=>
{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else
    {
        songIndex-=1;
    }
    audioElement.src=songs[songIndex].filePath;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    Effect.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

}

)
