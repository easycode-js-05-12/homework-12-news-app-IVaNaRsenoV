class NewsUI {
    constructor() {
        this.newsWindow = document.querySelector('.news-wrap .row');
    }

    /**
     * @description - добавление новостей на сайт
     * @param {object} news - новости, которые мы выбираем
     * @returns {undefined} undefined
     */
    addNews(news) {
        this.newsWindow.appendChild(NewsUI.markup(news));
    }

    /**
     * @description - происходит очищение новостей, когда мы выбираем новые новости
     * @returns {undefined} undefined
     */

    clearContainer() {
        let first = this.newsWindow.firstElementChild;
        while (first) {
            this.newsWindow.removeChild(first);
            first = this.newsWindow.firstElementChild;
        }
    }

    /**
     * @description - разметка 
     * @param {object} news - новости, которые мы выбираем
     * @returns {markup} - markup
     */

    static newsTemplate(news) {
        return `
        <div class="col s12 m6">
            <div class="card">
                <div class="card-image">
                    <img src="${news.urlToImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${news.title || ''}</span>

                    <p>${news.description || ''}</p>
                </div>
                <div class="card-action">
                    <a href="${news.url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    /**
     * @description - разметка 
     * @param {object} news - новости, которые создаются
     */

    static markup(news) {
        let divFirst = document.createElement('div');
        divFirst.classList.add('col', 's12', 'm6');

        let card = document.createElement('div');
        card.classList.add('card');
        divFirst.appendChild(card);

        let cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        card.appendChild(cardImage);

        let image = document.createElement('img');
        image.setAttribute('src', news.urlToImage);
        cardImage.appendChild(image);

        let cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        card.appendChild(cardContent);

        let span = document.createElement('span');
        span.classList.add('card-title');
        span.innerHTML = `${news.title || ''}`;
        cardContent.appendChild(span);

        let p = document.createElement('p');
        p.innerHTML = `${news.title || ''})`;
        cardContent.appendChild(p);

        let cardAction = document.createElement('div');
        cardAction.classList.add('card-action');
        card.appendChild(cardAction);

        let link = document.createElement('a');
        link.setAttribute('target', '_blank');
        link.setAttribute('href', news.url);
        link.appendChild(document.createTextNode("read more"));
        cardAction.appendChild(link);

        return divFirst;
    }
}










