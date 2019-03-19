// ==UserScript==
// @name         批量删除新浪微博博文
// @namespace    https://www.5ddm.com/
// @version      0.2
// @description  批量删除新浪微博
// @author       plain
// @match        https://weibo.com/*/profile?*
// @require      https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js
// @grant        none
// ==/UserScript==

jQuery.noConflict();
(function($) {
    'use strict';
     for (var i = 0; i < 100; i++) {
         setTimeout(function() {
             $('a[action-type="fl_menu"]')[0].click();
             $('a[title="删除此条微博"]')[0].click();
             $('a[action-type="ok"]')[0].click();
         }, 1000 * i);
     }
})(jQuery);