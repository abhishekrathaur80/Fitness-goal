export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const exerciseOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "bee08937eamsh3fb2411b663b08ep1b8b6cjsn85cf18593f77",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",

  headers: {
    "X-RapidAPI-Key": "bee08937eamsh3fb2411b663b08ep1b8b6cjsn85cf18593f77",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
