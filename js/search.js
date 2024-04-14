import dataJson from "./posts.json" assert { type: "json" };

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.getElementById('search-button');
    const resultsContainer = document.getElementById('search-results');

    function search(keyword) {
        const filteredResults = dataJson.filter(item => {
            return item.keyword.includes(keyword.toLowerCase());
        });

        renderResults(filteredResults);
    }

    function renderResults(results) {
        resultsContainer.innerHTML = '';

        if (results.length === 0) {
            resultsContainer.innerHTML = '<p>Нет результатов</p>';
        } else {
            results.forEach(item => {
                const resultItem = document.createElement('li');
                resultItem.classList.add('search-result');
                resultItem.innerHTML = `<a class="search-result__link" href="${item.link}">${item.title}</a>`;
                resultsContainer.appendChild(resultItem);
            });
        }
    }

    searchInput.addEventListener('input', function() {
        const keyword = this.value.trim();
        if (keyword) {
            search(keyword);
        } else {
            resultsContainer.innerHTML = '';
        }
    });

    searchButton.addEventListener('click', function() {
        event.preventDefault();
        window.location.href = '/pages/blog.html'; 
    });
});
