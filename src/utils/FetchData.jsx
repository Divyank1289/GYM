export const exerciseOptions={
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises',
    headers: {
      'X-RapidAPI-Key': 'a1c7b40fbamsh470a07b472ceddfp1b2a37jsnc5d1e850628a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6f7130f66cmshe10990e85922de9p1f773fjsn2f27c3b4fedf',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };


export const fetchData= async (url, options) => {
    const response= await fetch (url,options);
    const data = await response.json();
    return data;
}