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

    songHTML(){
        return `
        <img src="${this.image}"/>
        <h2 id="texts">${this.artist}</h2>
        <h3 id="texts">${this.title}</h3>
        
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