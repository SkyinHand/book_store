$(function () {
    $('#submit-advice-button').click(function() {

        let name = $('#cont-username').val()
        let idcard = $('#cont-idcard').val()
        let email = $('#cont-email').val()
        let phone = $('#cont-phone').val()
        let addon = $('#cont-info').val()

        if (name === '' || idcard === '' || email === '') {
            $('body').modalCreate('错误提示', '提交失败！请检查您的提交参数是否漏填！', '关闭', 'modal-style', 'text-danger', 'text-warning', function() {
                window.location.href = './aboutus.html'
            })
        } else {
            $('body').modalCreate('提交成功', '恭喜您提交成功，工作人员将会在7个工作日内与您联系', '关闭', 'modal-style', 'text-primary', 'text-success', function() {
                window.location.href = './home.html'
            })
        }
    })
})