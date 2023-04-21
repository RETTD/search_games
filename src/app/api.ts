
// const API_KEY = '26d5061e875a4301900d772501fa5bf9';
const baseUrl = 'https://api.rawg.io/api/games';


export const fetchItems = async (
  apiKey: string,
  page: number,
  search?: string
) => {
 const url = `${baseUrl}?page=${page}&page_size=10&search=${search}&ordering=-rating&key=${apiKey}`;
  const response = await fetch(
    url,
  );
  if (!response.ok) {
    throw new Error('Failed to fetch items');
  }
  const data = await response.json();
  console.log(data);
  
  return data.results;
};
