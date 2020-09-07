// ==UserScript==
// @name         批量删除新浪微博博文
// @namespace    https://github.com/dxhuii/delWeibo
// @version      1.0.4
// @description  批量删除新浪微博
// @author       plain
// @match        *://weibo.com/*/profile?*
// @match        *://weibo.com/u/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        function del() {
            for (var i = 0; i < 100; i++) {
                setTimeout(function() {
                    if(window.location.href.indexOf('//weibo.com/u/')) { // 新
                        document.querySelector('i[title="更多"]').click();
                        document.querySelectorAll('.woo-pop-item-main')[6].click();
                        document.querySelector('.woo-dialog-ctrl').querySelectorAll('.woo-button-main')[1].click();
                        window.location.reload();
                    }

                    if(window.location.href.indexOf('/profile')) { // 旧
                        document.querySelector('a[action-type="fl_menu"]').click();
                        document.querySelector('a[title="删除此条微博"]').click();
                        document.querySelector('a[action-type="ok"]').click();
                    }
                }, 1000 * i);
            }
        }
    
        // 判断如果有cookie 就不再弹窗，直接进行删除微薄
        if(document.cookie.indexOf('delWeibo=1') !== -1) {
            del()
        } else {
            var r = confirm("确定好要删除所有微薄了吗，确定好了就点确定吧!");
            if (r === true) {
                document.cookie = 'delWeibo=1';
                del()
            }
        }
    }
})();