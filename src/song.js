class Song {
    constructor(id, artist , title , genre, mp3 , image , album){
        this.id = id
        this.artist = artist
        this.title = title
        this.genre = genre
        this.mp3 = mp3
       this.image = image
       this.album = album
       this.renderSong()
    }


    deleteSong(){

    }


    songHTML(){
        return `
        <a><img src="${this.image}"/></a>
        <h2 id="texts">${this.artist}</h2>
        <h3 id="texts">${this.title}</h3>
        <button data-id="${this.id}">Delete</button>
        `
    }
    
    renderSong(){
        const songContainer = document.getElementById('song-container')
        const songCard = document.createElement('div')
        songCard.classList.add('song-card')
        songCard.id = this.id
        songCard.innerHTML += this.songHTML()
        songContainer.appendChild(songCard)
    }


}


