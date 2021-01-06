$(function () {
    // 获取书籍ID
    let book_id = getQueryString('id')
    console.log(database[book_id]['title'])
})