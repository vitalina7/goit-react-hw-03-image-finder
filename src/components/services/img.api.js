 const baseUrl = 'https://pixabay.com/api/';
 const myApiKey = '33982710-8c3e65337690b3022ecdda59f';
 const onPage = 12;

export const getSearch = (searchText, page)  => {
  const params = new URLSearchParams({
    q: searchText,
    page: page,
    key: myApiKey,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: onPage,
  });

  return fetch(`${baseUrl}?${params}`);
};


