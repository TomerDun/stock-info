import { formatSearch } from "./apiUtils.js";
import { API_KEY } from "./secrets.js"

const BASE_URL = 'https://financialmodelingprep.com/stable'


async function searchSymbol(query, exchange='NASDAQ') {
    const url = `${BASE_URL}/search-symbol?apikey=${API_KEY}&exchange=${exchange}&query=${encodeURIComponent(query)}`;
    

    const res = await fetch(url);
    if (!res.ok) {
        console.error('search Fetch error, res: ', res);
        throw Error(`Fetching to search api failed with code ${res.statusText}`);
    }
    const data = await res.json();
    console.log('--search api data:');    
    console.table(data)        
    return formatSearch(data);

}

