// ==UserScript==
// @name         批量取消新浪微博收藏
// @namespace    https://www.5ddm.com/
// @version      0.3
// @description  批量取消新浪微博收藏
// @author       plain
// @match        https://weibo.com/fav*
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

jQuery.noConflict();
(function($) {
    'use strict';
     for (var i = 0; i < 100; i++) {
         setTimeout(function() {
             $('a[action-type="fl_favorite"]')[0].click();
             $('a[action-type="ok"]')[0].click();
         }, 1000 * i);
     }
})(jQuery);