export function searchForm(query) {
    const pixaBay = `https://pixabay.com/api/`;
    const API_KEY = '43325485-b0026802577d8a210f4fcd054';
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: `photo`,
        orientation: `horizontal`,
        safesearch: true
    })

    return fetch(`${pixaBay}?${params}`)

    .then(res => {
        return res.json();
      })
      .catch(err => {
        throw new Error(err.status);
      });
   
};