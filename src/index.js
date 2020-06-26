document.addEventListener("DOMContentLoaded",function(){
    fetch('http://localhost:3000/songs')
    .then(res => res.json())
    .then(songs =>{ 
        songs.forEach(song =>{
            const {id, artist, title, genre, mp3, image, album} = song
            new Song(id, artist, title, genre, mp3, image, album)
        })
    })   
    });


    function addSong(e){
       
    
    
    
    }