

export const exerciseOptions = {
    method: 'GET',
    params: {
      limit: '10',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key': '1e8571aaf4msh6c0ad5a8f8c2affp1e9d7ejsnc63beb1b3a52',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    
    const res = await fetch(url, options); 
    const data = await res.json();

    return data;

}