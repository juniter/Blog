$(document).ready(function () {
    $('#main-function').attr('src', '/home');
    $('#home').click(function () {
        $('#main-function').attr('src', '/home');
    });
    $('#java').click(function () {
        $('#main-function').attr('src', 'https://www.baidu.com');
    });
});