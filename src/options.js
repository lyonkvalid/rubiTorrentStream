export const options = (path) => ({
  method: 'GET',
  url: `https://movies-and-serials-torrent.p.rapidapi.com/tv_shows/${path}`,
  headers: {
    'x-rapidapi-host': 'movies-and-serials-torrent.p.rapidapi.com',
    'x-rapidapi-key': 'b0c9f78619mshf92883618407508p199dd4jsn191d0e2ed90b'
  }
});