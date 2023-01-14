export const exerciseOptions = {
    method: 'GET',
   
    headers: {
      'X-RapidAPI-Key': '5c982f12fcmsh1ba731bbaf0b230p1df1bdjsn4ed672cae185',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '5c982f12fcmsh1ba731bbaf0b230p1df1bdjsn4ed672cae185',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options)=>{
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}