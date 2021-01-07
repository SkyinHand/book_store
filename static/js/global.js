let database = {
    'counts': 10,
    'data': [{
        'id': '1',
        'title': '散步的侵略者',
        'author': '前川知大',
        'country': '日',
        'price': 34,
        'count': 127,
        'cover': '../static/img/book_img/book_1.jpg'
    },{
        'id': '2',
        'title': '三十年战争史',
        'author': '彼得·威尔逊',
        'country': '英',
        'price': 44,
        'count': 107,
        'cover': '../static/img/book_img/book_2.jpg'
    },{
        'id': '3',
        'title': '六十个故事',
        'author': '迪诺·布扎蒂',
        'country': '意',
        'price': 41,
        'count': 137,
        'cover': '../static/img/book_img/book_3.jpg'
    },{
        'id': '4',
        'title': '诗人的思考',
        'author': '海伦·文德勒',
        'country': '美',
        'price': 48,
        'count': 187,
        'cover': '../static/img/book_img/book_4.jpg'
    },{
        'id': '5',
        'title': '项塔兰3',
        'author': '格里高利·大卫·罗伯兹',
        'country': '澳大利亚',
        'price': 34,
        'count': 47,
        'cover': '../static/img/book_img/book_5.jpg'
    },{
        'id': '6',
        'title': '隋唐世界帝国的形成',
        'author': '谷川道雄',
        'country': '日',
        'price': 54,
        'count': 507,
        'cover': '../static/img/book_img/book_6.jpg'
    },{
        'id': '7',
        'title': '抓落叶',
        'author': '汤米·巴特勒',
        'country': '美',
        'price': 64,
        'count': 167,
        'cover': '../static/img/book_img/book_7.jpg'
    },{
        'id': '8',
        'title': '漫步八十年代',
        'author': '老葛',
        'country': '中',
        'price': 84,
        'count': 187,
        'cover': '../static/img/book_img/book_8.jpg'
    },{
        'id': '9',
        'title': '一千亿种生活',
        'author': '蕾秋·乔伊斯',
        'country': '英',
        'price': 34,
        'count': 77,
        'cover': '../static/img/book_img/book_9.jpg'
    },{
        'id': '10',
        'title': '电影时代',
        'author': '保琳·凯尔',
        'country': '美',
        'price': 69,
        'count': 3,
        'cover': '../static/img/book_img/book_10.jpg'
    }]
};

Date.prototype.Format = function (fmt) { // author: meizz
    var o = {
        "M+": this.getMonth() + 1, // 月份
        "d+": this.getDate(), // 日
        "H+": this.getHours(), // 小时
        "m+": this.getMinutes(), // 分
        "s+": this.getSeconds(), // 秒
        "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
        "S": this.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function getQueryString(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] === variable){return pair[1];}
    }
    return null;
}

$('document').ready(function() {
    let searchMap = { 1 : 'id', 2 : 'title', 3: 'author', 4: 'country' };
    let currentSearchIndex = 1;

    // 将当前数据存储到Storage中，如果一开始没有赋值，则赋予初值，否则不赋予
    if(window.localStorage.getItem("database") === null) {
        window.localStorage.setItem("database", JSON.stringify(database));
    }

    // 获取当前时间并重新设置时间到导航栏
    $('#p-time').html(`当前时间：${new Date().Format('yyyy-MM-dd HH:mm:ss')}`);

    setInterval(function() {
        $('#p-time').html(`当前时间：${new Date().Format('yyyy-MM-dd HH:mm:ss')}`);
    }, 1000);

    // =============== 全局点击事件 ===============

    $('#search').click(function() {
        let searchContent = $('#searchBox').val();
        if(searchContent !== '') {
            window.location.href = "./search.html?" + searchMap[currentSearchIndex] + '=' + searchContent;
        } else {
            $('body').modalCreate('错误', '请检索内容是否填写完整！', '确定', 'modal-style', '', 'text-danger');
        }
    })

    $('.new-book-item').click(function() {
        // 点击一本书，跳转到详情界面，该界面展示该书籍的相关信息
        let currentIndex = $(this).attr('book-id');
        // 跳转界面
        window.location.href = './bookdetail.html?id=' + currentIndex;
    })

    $('.dropdown-item').click(function () {
        currentSearchIndex = $(this).attr('dropdown-id');
        $('#drop-search-type').html($(this).text());
        $('#searchBox').attr('placeholder', `请输入${$(this).text()}`);
    })

    $('#clear').click(function () {
        $('#searchBox').val('');
    })

})
