// ==UserScript==
// @name         批量删除新浪微博博文
// @namespace    https://github.com/dxhuii/delWeibo
// @version      1.1.3
// @author       plain
// @description  批量删除新浪微博
// @license      MIT
// @icon         https://weibo.com/favicon.ico
// @match        *://weibo.com/*/profile?*
// @match        *://weibo.com/u/*
// @match        *://weibo.com/fav*
// @match        *://weibo.com/u/page/fav/*
// @require      https://cdn.jsdelivr.net/npm/vue@3.2.39/dist/vue.global.prod.js
// ==/UserScript==

// use vite-plugin-monkey@2.4.0 at 2022-09-13T12:38:58.947Z

(({css:t=""})=>{const e=document.createElement("style");e.innerText=t,e.dataset.source="vite-plugin-monkey",document.head.appendChild(e)})({css:".del-weibo[data-v-00812207]{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:9999999}"});

(function(vue) {
  "use strict";
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    __name: "DelWeibo",
    setup(__props) {
      const start = vue.ref(0);
      const count = vue.ref(0);
      function $(elem) {
        return document.querySelector(elem);
      }
      function $All(elem) {
        return document.querySelectorAll(elem);
      }
      function $$(elem, el) {
        return $(elem).querySelectorAll(el)[1];
      }
      function del() {
        const url = window.location.href;
        for (let i = 0; i < 1e3; i++) {
          setTimeout(function() {
            if (url.indexOf("//weibo.com/u/page/fav/") !== -1) {
              if ($('i[title="\u66F4\u591A"]')) {
                $('i[title="\u66F4\u591A"]').click();
                $All(".woo-pop-item-main")[0].click();
                if ($(".woo-dialog-ctrl")) {
                  $$(".woo-dialog-ctrl", ".woo-button-main").click();
                }
                i > 5 && window.location.reload();
              }
            }
            if (url.indexOf("/profile") !== -1) {
              if ($('a[action-type="fl_menu"]')) {
                $('a[action-type="fl_menu"]').click();
                $('a[title="\u5220\u9664\u6B64\u6761\u5FAE\u535A"]').click();
                $('a[action-type="ok"]').click();
                $('a[title="\u53D6\u6D88\u5FEB\u8F6C"]').click();
              }
            }
            if (url.indexOf("//weibo.com/fav") !== -1) {
              if ($('a[action-type="fl_favorite"]')) {
                $('a[action-type="fl_favorite"]').click();
                $('a[action-type="ok"]').click();
              }
            }
            if (url.indexOf("//weibo.com/u/") !== -1) {
              if ($('i[title="\u66F4\u591A"]') || $('i[title="\u8D1F\u53CD\u9988"]')) {
                if ($('i[title="\u66F4\u591A"]')) {
                  $('i[title="\u66F4\u591A"]').click();
                }
                if ($('i[title="\u8D1F\u53CD\u9988"]')) {
                  $('i[title="\u8D1F\u53CD\u9988"]').click();
                }
                const item = $All(".woo-pop-item-main");
                if (item.length) {
                  if (item.length > 3) {
                    item.forEach((item2) => item2.innerText === "\u5220\u9664" && item2.click());
                    count.value = 0;
                  } else {
                    item.forEach((item2) => item2.innerText === "\u53D6\u6D88\u5FEB\u8F6C" && item2.click());
                    setTimeout(() => {
                      count.value = 1;
                    }, 1e3);
                  }
                }
                $(".woo-dialog-ctrl") && $$(".woo-dialog-ctrl", ".woo-button-main").click();
                if ($(".deletedToolbar_toolbarFull_1dOfW")) {
                  $(".deletedToolbar_toolbarFull_1dOfW").click();
                }
                if (count.value) {
                  count.value = 0;
                  setTimeout(() => {
                    window.location.reload();
                  }, 1e3);
                }
                i > 160 && window.location.reload();
              }
            }
          }, 1e3 * i);
        }
      }
      const onStart = () => {
        console.log("\u5F00\u59CB");
        localStorage.delWeibo = "start";
        start.value = 1;
        del();
      };
      const onEnd = () => {
        console.log("\u7ED3\u675F");
        localStorage.delWeibo = "end";
        start.value = 0;
        window.location.reload();
      };
      vue.watchEffect(() => {
        if (localStorage.delWeibo === "start") {
          del();
          start.value = 1;
        }
      });
      return (_ctx, _cache) => {
        return start.value ? (vue.openBlock(), vue.createElementBlock("button", {
          key: 0,
          class: "del-weibo",
          onClick: onEnd
        }, "\u7ED3\u675F")) : (vue.openBlock(), vue.createElementBlock("button", {
          key: 1,
          class: "del-weibo",
          onClick: onStart
        }, "\u5F00\u59CB"));
      };
    }
  });
  const DelWeibo_vue_vue_type_style_index_0_scoped_00812207_lang = "";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const DelWeibo = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-00812207"]]);
  const _sfc_main = /* @__PURE__ */ vue.defineComponent({
    __name: "App",
    setup(__props) {
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createBlock(DelWeibo);
      };
    }
  });
  vue.createApp(_sfc_main).mount(
    (() => {
      const app = document.createElement("div");
      document.body.append(app);
      return app;
    })()
  );
})(Vue);
