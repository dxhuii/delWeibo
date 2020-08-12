// ==UserScript==
// @name         批量取消新浪微博收藏
// @namespace    https://www.5ddm.com/
// @version      0.3
// @description  批量取消新浪微博收藏
// @author       plain
// @match        https://weibo.com/fav*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	function fav() {
        if (r === true){
            for (var i = 0; i < 100; i++) {
                setTimeout(function() {
                    document.querySelector('a[action-type="fl_favorite"]').click();
                    document.querySelector('a[action-type="ok"]').click();
                }, 1000 * i);
            }
        }
    }

    // 判断如果有cookie 就不再弹窗，直接进行删除微薄
    if(document.cookie.indexOf('delFav=1') !== -1) {
        fav();
    } else {
        var r = confirm("确定好要取消所有新浪微博收藏了吗？确定好了就点确定吧!");
        if (r === true) {
            document.cookie = 'delFav=1';
            fav();
        }
    }

    // 关闭浏览器或者标签删除保存的cookie
    window.onbeforeunload = function() {
        document.cookie = 'delFav=';
    }

})();