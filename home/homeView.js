// Render functions

import { searchSymbol } from "../apiHandler.js";
import { search_AA } from "../mockData/formatted/search.js";

function renderResults(results) {
    const container = document.querySelector('#results-container');
    results.forEach(res => {
        const row = document.createElement('div');
        row.className = 'result-row';
        row.innerHTML = `${res.name} (${res.symbol})`;
        container.appendChild(row);
    })
    container.classList.remove('hidden')
}

// Event handlers
async function handleSearch() {
    const query = document.querySelector('#search-input').value;
    // const results = await searchSymbol(query); // PROD
    const results = search_AA; // DEV
    renderResults(results);
}

// Connect event hanlders
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#search-button').addEventListener('click', handleSearch);

    document.querySelector('#search-input').addEventListener('input', () => {
        document.querySelector('#results-container').classList.add('hidden');
    })
})