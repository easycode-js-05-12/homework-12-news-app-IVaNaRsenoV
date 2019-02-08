/**
 * @description - класс необходимый для создания методов get и post запросов на сервер
 */

class CustomHttp {

    /**
     * @description - загужаются данные с сервера
     * @param {string} url - API URL
     * @param {function} callback - callback функция
     */

    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
    }

    /**
     * @description - загружаются данные с сервера
     * @param {string} url - API URL
     * @param {object} data - данные объекта
     * @param {function} callback - callback функция
     */

    post(url, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(data);
        xhr.addEventListener('load', () => callback(xhr.responseText));
    }
}