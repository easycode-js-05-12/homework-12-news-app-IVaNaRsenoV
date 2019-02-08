const newsService = new NewsService();
const newsUI = new NewsUI();
const alert = new  Window();
// UI Elements
const form = document.forms['newsControlForm'];
const countrySelect = form['country'];
const categorySelect = form['category'];

/**
 * @desc Works when we change counrty or category 
 * @param {object} - event
 */
function onSelectChange(e) {
    const country = countrySelect.value;
    const category = categorySelect.value;
    
    if (!country || !category) return console.log('Выберите страну и категорию');

    newsService.getTopHeadlinesNews((response) => {
        const { articles } = response;
        newsUI.clearContainer();
        articles.forEach((news) => newsUI.addNews(news));
    }, category, country);
}

// События
countrySelect.addEventListener('change', onSelectChange);
categorySelect.addEventListener('change', onSelectChange);


//Поиск
//UI
const search = form['search'];


search.addEventListener('keypress',  searchFunc); // функция вызывается каждый раз, когда нажат enter

/**
 * @description - работа с поиском по трём буквам
 */
function searchFunc(){
    const searchValue = search.value;
    if (searchValue.length >= 2) {
        newsService.getSearchNews(function(response){  //1 тут мы вызываем наш запрос
            const { articles } = response;
           // console.log(response);
            newsUI.clearContainer();
            if (!response.totalResults) {
                return alert.showWindow();  
            }
            articles.forEach(function(news) {
                newsUI.addNews(news);
            });
        }, searchValue);
    } 
}