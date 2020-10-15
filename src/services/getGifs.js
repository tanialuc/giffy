const apikey = 'UEe6lwvN76ZDQGAtVRWYWCRsTDY5J1U3'


export default function getGifs({keyword = 'morty'} = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`
    return fetch(apiURL)
        .then(res => res.json())
        .then(response => {
        const {data = []} = response 
        if(Array.isArray(data)) {
            const gifs = data.map(image=>{
                const {images, tittle, id} = image
                const {url} = images.downsized_medium
                return {tittle, id, url}
            })
            return gifs
        }
    })


}