const http = new CustomHttp();

class NewsService {
    constructor() {
        this.apiUrl = 'https://newsapi.org/v2';
        this.apiKey = '9c27b0f722b84da5a08312d2b125351b';
        this.country = 'ua';
        this.category = 'technology';
    }

    /**
     * @desc Get all news
     * @param {function} callback - callback 
     * @param {string} country -  country
     * @param {string} category - category
     */
    getTopHeadlinesNews(callback, category = this.category, country = this.country) {
        http.get(`${this.apiUrl}/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`, callback);
    }

    /**
     * @desc Get news from search 
     * @param {function} callback - callback 
     * @param {string} country -  country
     * @param {string} category - category
     */
    //1-сформировал запрос на адрес q
    getSearchNews(callback, q) {
        http.get(`${this.apiUrl}/everything?q=${q}&apiKey=${this.apiKey}`, callback);
    }
}