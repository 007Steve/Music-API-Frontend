class SongAdapter {
    constructor(){
        this.baseUrl = 'http://localhost:3000/songs'
    }

    getSong(){
        return fetch(this.baseUrl)
        .then(res => res.json())
    }
}