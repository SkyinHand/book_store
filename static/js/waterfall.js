/*
 *           瀑布流插件
 *
 *      Copyright: 掌上天空
 *      2020/12/6 - 21:51
 * */




;
(function($) {
    $.fn.waterFall = function(gap = 40) {
        var $this = $(this) // 获取 Content 列表元素
        var item = $this.children() // 获取所有的盒子元素
            // 每一行的数目是： 父元素的总宽度 / (子元素的宽度 + gap)
        var itemWidth = item.width() // 瀑布流元素的宽度
        var itemHeight = 0 // 瀑布流元素的高度，初始化为0
        var column = Math.floor($(this).width() / (itemWidth + gap)) // 计算一行最多几列
        var arrayHeight = [] // 保存每一列的高度值
        item.each(function(index, element) {
                itemHeight = $(element).height() // 获取当前遍历元素的高度
                if (index < column) {
                    // 如果当前遍历的元素ID小于 column的数目，表示当前是第一行
                    $(element).css({
                        top: 0, // 第一行是顶格显示的，所以设置top为 0
                        left: index * (itemWidth + gap)
                    })
                    arrayHeight[index] = itemHeight
                } else {
                    function getMinHeight(arr) {
                        var min = {} // 存储数组中的最小值和索引值
                        min.index = 0 // 最小值的索引值
                        min.value = arr[min.index]
                        for (let i = 1; i < arr.length; i++) {
                            if (arr[i] < min.value) {
                                min.value = arr[i]
                                min.index = i
                            }
                        }
                        return min
                    }
                    var min = getMinHeight(arrayHeight)
                    var minIndex = min.index
                    var minValue = min.value
                    $(element).css({
                        top: minValue + gap,
                        left: minIndex * (itemWidth + gap)
                    })
                    arrayHeight[minIndex] += (itemHeight + gap)
                }
            })
            // 获取子元素中的最高高度，将此高度加上间隔高度得到新高度，新高度即父元素的高度
        let arrMaxValue = arrayHeight[0]
        for (let i = 1; i < arrayHeight.length; i++) {
            if (arrayHeight[i] > arrMaxValue) {
                arrMaxValue = arrayHeight[i]
            }
        }
        $(this).css({
            height: arrMaxValue + gap
        })
    }
})(jQuery)