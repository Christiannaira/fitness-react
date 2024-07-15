

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e8571aaf4msh6c0ad5a8f8c2affp1e9d7ejsnc63beb1b3a52',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const youtubeSearchOptions = {
  method: 'Get',
  headers: {
    'x-rapidapi-key': '1e8571aaf4msh6c0ad5a8f8c2affp1e9d7ejsnc63beb1b3a52',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
}


export const fetchData = async (url, options) => {
    
    const res = await fetch(url, options); 
    const data = await res.json();

    return data;

}