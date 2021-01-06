var searchList = ['id', 'title', 'author', 'country'];

$(function () {
    // 获取书籍ID
    let database = JSON.parse(window.localStorage.getItem('database'));
    let currentIndex = 1;
    for(let j = 0; j < searchList.length; j++) {
        let currentTag = searchList[j];
        let operator = getQueryString(currentTag);
        console.log('operator:' + decodeURIComponent(operator))
        if(operator !== null) {
            for(let i = 1; i <= database['max-book']; i++) {
                let stri = i.toString();
                console.log(database[stri][currentTag].toString())
                if(database[stri][currentTag].toString().indexOf(decodeURIComponent(operator)) !== -1) {
                    // 如果找到了，就更新列表
                    $('#stable-body').append(`
                    <tr>
                        <th scope="row">${currentIndex++}</th>
                        <td>${database[stri]['id']}</td>
                        <td>${database[stri]['title']}</td>
                        <td>${database[stri]['author']}</td>
                        <td>${database[stri]['country']}</td>
                        <td>${database[stri]['price']}</td>
                        <td>${database[stri]['count']}</td>
                        <td><a href="./bookdetail.html?id=${database[stri]['id']}" class="text-decoration-none text-warning">=>详情</a></td>
                    </tr>`)
                }
            }
            break;
        }
    }
})