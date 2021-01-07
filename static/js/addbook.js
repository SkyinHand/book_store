$(function () {
    // =============== 动态添加书籍 ===============
    // 加载数据库(假)
    let database = JSON.parse(window.localStorage.getItem('database'));
    for(let i = 0; i < database['data'].length; i++) {
        $('.new-book-list').append(`<div class="card new-book-item" book-id = "${database['data'][i]['id']}">
                        <a href="#">
                            <img src="${database['data'][i]['cover']}" class="card-img-top" alt="${database['data'][i]['title']}">
                        </a>
                        <div class="card-body new-book-item-body">
                            <a class="card-title new-book-item-title text-center" href="#">
                                ${database['data'][i]['title']}
                            </a>
                            <p class="card-text new-book-item-text">
                                [${database['data'][i]['country']}]${database['data'][i]['author']}
                            </p>
                        </div>
                    </div>`)
    }
})