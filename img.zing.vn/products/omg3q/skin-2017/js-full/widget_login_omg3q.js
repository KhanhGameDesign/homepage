var apiKey = 'dbf5f44c9bce9c207e510304b158d88c';
var pid = '278';
var urlCallback = 'http://omg3q.vnggames.com/index.html';


function dkn_callback(cbdata, acn, zid, uin, autcode, obj) {
    var param = "";
    if (typeof window.location.href.split('?')[1] != "undefined") {
        param = window.location.href.split('?')[1];
    }
    if (zid > 0) {
        window.location.href = urlCallback;
    } else {
        alert('Có lỗi xảy ra, vui lòng thử lại', 3000);
    }
};

function dkn_login() {
    zmeOpenWidget.doRegister('dkn_callback');
}



window.zAsyncInit = function() {
    zmeOpenWidget.init({
        apikey: apiKey, //api key (public)
        pid: pid,
        callback: 'dkn_callback',
        tpl: '6',
        css: '//stc-id.zing.vn/openwidget/css/login_quickreg_1.06.css'
    });
};
(function(d) {
    var js, id = 'widget-jssdk',
        ref = d.getElementsByTagName('script')[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    var t = Math.floor(Math.random() * 10000);
    // js.src = "//open.id.zing.vn/widget/_static/openwidget.js?type=2&t=" + t;
    js.src = "https://stc-id.zing.vn/widget/js/openwidget2.js?type=2&t=" + t;
    ref.parentNode.insertBefore(js, ref);
}(document));