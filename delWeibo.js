// ==UserScript==
// @name         批量删除新浪微博博文
// @namespace    https://www.5ddm.com/
// @version      0.3
// @description  批量删除新浪微博
// @author       plain
// @match        https://weibo.com/*/profile?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function del() {
        for (var i = 0; i < 100; i++) {
            setTimeout(function() {
                document.querySelector('a[action-type="fl_menu"]').click();
                document.querySelector('a[title="删除此条微博"]').click();
                document.querySelector('a[action-type="ok"]').click();
            }, 1000 * i);
        }
    }

    // 判断如果有cookie 就不再弹窗，直接进行删除微薄
    if(document.cookie.indexOf('delWeibo=1') !== -1) {
        del();
    } else {
        var r = confirm("确定好要删除所有微薄了吗，确定好了就点确定吧!");
        if (r === true) {
            document.cookie = 'delWeibo=1';
            del();
        }
    }

    // 关闭浏览器或者标签删除保存的cookie
    window.onbeforeunload = function() {
        document.cookie = 'delWeibo=';
    }
})();