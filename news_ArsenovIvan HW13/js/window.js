/**
 * @description - этот класс нужен для создания модального окна, если поиск не найдет ответа
 */

class Window {

    constructor() {
        this.newsWindow = document.querySelector('.news-wrap .row');
    }

    /**
     * @description создаётся модальное окно с выводом сообщения и удаляется на третей секунде
     * @returns {undefined} - undefined
     */

    showWindow() {
        this.newsWindow.insertAdjacentHTML("afterbegin",
            ` <div class="card-panel teal lighten-2">Нет таких новостей, попытайтесь снова!</div>`);
        setTimeout(function () {
            let firstElem = document.querySelector(".card-panel");
            if (firstElem) {
                this.newsWindow.removeChild(firstElem);
            }
        }, 3000);
    }
}