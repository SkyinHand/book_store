$(function () {
    let database = JSON.parse(window.localStorage.getItem('database'));
    for (let i = 10; i < 20; i++) {
        $('.sidebar-list').append(`<li class="sidebar-list-item">
                        <span>${i - 9}.</span>
                        <div class="list-item">
                            <a href="#" class="title">${database['data'][i]['title']}</a>
                            <div class="author">[${database['data'][i]['country']}]${database['data'][i]['author']}</div>
                        </div>
                        <a class="buy-link" href="./bookdetail.html?id=${database['data'][i]['id']}">
                            <span class="buy-button">去购买</span>
                        </a>
                    </li>`);
    }

    for (let i = 21; i < 26; i++) {
        $('.other-book').append(`<div class="book-item">
                            <a href="./bookdetail.html?id=${database['data'][i]['id']}">
                                <img src="${database['data'][i]['cover']}" alt="${database['data'][i]['title']}">
                            </a>
                            <div class="bookstore-info">
                                <div>${database['data'][i]['title']}</div>
                                <div>￥${database['data'][i]['price']}</div>
                            </div>
                        </div>`)
    }



    $('.bookstore-info').click(function () {
        window.location.href = './bookdetail.html?id=21';
    })

    window.onload = function() {
        $('.new-book-list').waterFall(25)
    }

    window.onresize = function() {
        $('.new-book-list').waterFall(25)
        let cWith;
        if ($(window).width() <= 1218) {
            cWith = 1218
        } else {
            cWith = '100%'
        }
        $('#logo-area').css({
            width: cWith
        })
        $('.footer-main').css({
            width: cWith
        })
    }

})