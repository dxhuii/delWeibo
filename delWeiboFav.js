// ==UserScript==
// @name         批量取消新浪微博收藏
// @namespace    https://www.5ddm.com/
// @version      0.3
// @description  批量取消新浪微博收藏
// @author       plain
// @match        https://weibo.com/fav*
// @require      https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js
// @requier      https://cdn.bootcdn.net/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js
// @grant        none
// ==/UserScript==

jQuery.noConflict();
(function($) {
    'use strict';

	function fav() {
        if (r === true){
            for (var i = 0; i < 100; i++) {
                setTimeout(function() {
                    $('a[action-type="fl_favorite"]')[0].click();
                    $('a[action-type="ok"]')[0].click();
                }, 1000 * i);
            }
        }
    }

    // 判断如果有cookie 就不再弹窗，直接进行删除微薄
    if($.cookie('delFav')) {
        fav();
    } else {
        var r = confirm("确定好要取消所有新浪微博收藏了吗？确定好了就点确定吧!");
        if (r === true) {
            $.cookie('delFav', '1');
            fav();
        }
    }

    // 关闭浏览器或者标签删除保存的cookie
    window.onbeforeunload = function() {
        $.removeCookie('delFav');
    }

})(jQuery);