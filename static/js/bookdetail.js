$(function () {
    // 获取书籍ID

    let database = JSON.parse(window.localStorage.getItem('database'));

    let book_id = getQueryString('id');
    let img_element = $('#book-cover');
    let count_tip_element = $('#total-price');
    let input_count_element = $('#input-count');
    let buy_button = $('#buy-button');
    let error = true;
    img_element.attr('src', database[book_id]['cover']);
    img_element.attr('alt', database[book_id]['title']);
    $('#book-id').html(`书籍ID：${book_id}`)
    $('#book-title').html(`${database[book_id]['title']}`);
    $('#book-author').html(`[${database[book_id]['country']}]${database[book_id]['author']}`);
    $('#book-price').html(`定价：${database[book_id]['price']}&nbsp;元`);
    $('#book-count').html(`剩余库存：${database[book_id]['count']}&nbsp;本`);

    count_tip_element.html(`<p class="text-danger mb-0 mt-3">购买数量不合法，请重新输入！</p>`);

    input_count_element.on('input', function() {
        var count = parseInt(input_count_element.val());
        if(!(input_count_element.val() === '') && !isNaN(count) && count <= database[book_id]['count']) {
            count_tip_element.html(`购买当前书籍总需：${count * database[book_id]['price']}&nbsp;元`);
            error = false;
        } else {
            count_tip_element.html(`<p class="text-danger mb-0 mt-3">购买数量不合法，请重新输入！</p>`);
            error = true;
        }
    })

    buy_button.click(function () {
            if (error) {
                $('body').modalCreate('错误', '购买数量不合法，请重新输入！', '重置', 'modal-style', '', 'text-danger', function () {
                    input_count_element.val('');
                });
            } else {
                $('body').modalCreate('成功', '购买成功，请稍后填写您的地址信息！', '确认', 'modal-style', '', 'text-success', function () {
                    database[book_id]['count'] = database[book_id]['count'] - parseInt(input_count_element.val());
                    window.localStorage.setItem('database', JSON.stringify(database));
                    window.location.href = './browse.html';
                });
            }
        }
    )
})