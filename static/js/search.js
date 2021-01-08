var searchList = ['id', 'title', 'author', 'country'];

$(function () {
    // 获取书籍ID
    let database = JSON.parse(window.localStorage.getItem('database'));
    let currentIndex = 1;
    for(let j = 0; j < searchList.length; j++) {
        let currentTag = searchList[j];
        let operator = getQueryString(currentTag);
        if(operator !== null) {
            for(let i = 0; i < database['data'].length; i++) {
                if(database['data'][i][currentTag].toString().indexOf(decodeURIComponent(operator)) !== -1) {
                    // 如果找到了，就更新列表
                    $('#stable-body').append(`
                    <tr>
                        <th scope="row">${currentIndex++}</th>
                        <td>${database['data'][i]['id']}</td>
                        <td>${database['data'][i]['title']}</td>
                        <td>${database['data'][i]['author']}</td>
                        <td>${database['data'][i]['country']}</td>
                        <td>${database['data'][i]['price']}</td>
                        <td>${database['data'][i]['count']}</td>
                        <td><a href="./bookdetail.html?id=${database['data'][i]['id']}" class="text-decoration-none text-warning">=>详情</a></td>
                    </tr>`)
                }
            }
            break;
        }
    }
    if(currentIndex <= 8) {
        $('.footer-main').addClass( 'absolute-bottom');
        $('#table-container').addClass('absolute-center');
    }
})