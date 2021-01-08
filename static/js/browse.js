// 加载瀑布流，以52为间隔
window.onload = function() {
    $('.new-book-list').waterFall(52)
}

window.onresize = function() {
    $('.new-book-list').waterFall(52)
}