// ==UserScript==
// @name         批量删除新浪微博博文
// @namespace    https://github.com/dxhuii/delWeibo
// @version      1.0.7
// @description  批量删除新浪微博
// @author       plain
// @match        *://weibo.com/*/profile?*
// @match        *://weibo.com/u/*
// @match        *://weibo.com/fav*
// @match        *://weibo.com/u/page/fav/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.onload = () => {
        function $(elem) {
            return document.querySelector(elem);
        }
        function $All(elem) {
            return document.querySelectorAll(elem);
        }
        function del() {
            for (var i = 0; i < 100; i++) {
                setTimeout(function() {
                    if(window.location.href.indexOf('//weibo.com/u/page/fav/') !== -1) { // 新
                        if($('i[title="更多"]')) {
                            $('i[title="更多"]').click();
                            $All('.woo-pop-item-main')[0].click();
                            if($('.woo-dialog-ctrl')) {
                                $('.woo-dialog-ctrl').querySelectorAll('.woo-button-main')[1].click();
                            }
                            window.location.reload();
                        }
                    }
                    
                    if(window.location.href.indexOf('/profile') !== -1) { // 旧
                        if($('a[action-type="fl_menu"]')) {
                            $('a[action-type="fl_menu"]').click();
                            $('a[title="删除此条微博"]').click();
                            $('a[action-type="ok"]').click();
                        }
                    }
                    if(window.location.href.indexOf('//weibo.com/fav') !== -1) { // 旧，github网友提供 https://github.com/Syukkic
                        if($('a[action-type="fl_favorite"]')) {
                            $('a[action-type="fl_favorite"]').click();
                            $('a[action-type="ok"]').click();   
                        }
                    }
                    
                    if(window.location.href.indexOf('//weibo.com/u/') !== -1) { // 新
                        if($('i[title="更多"]')) {
                            $('i[title="更多"]').click();
                            $All('.woo-pop-item-main')[$All('.woo-pop-item-main').length-2].click();
                            $('.woo-dialog-ctrl').querySelectorAll('.woo-button-main')[1].click();
                            window.location.reload();
                        }
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
