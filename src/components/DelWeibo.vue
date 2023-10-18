<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const start = ref(0)
const count = ref(0)

function $(elem: string) {
  return document.querySelector(elem) as HTMLDivElement
}
function $All(elem: string) {
  return document.querySelectorAll(elem) as unknown as HTMLDivElement[]
}
function $$(elem: string, el: string) {
  return $(elem).querySelectorAll(el)[1] as HTMLDivElement
}
function del() {
  const url = window.location.href
  for (let i = 0; i < 1000; i++) {
    setTimeout(() => {
      if (url.includes('//weibo.com/u/page/fav/')) {
        // 新
        if ($('i[title="更多"]')) {
          $('i[title="更多"]').click()
          $All('.woo-pop-item-main')[0].click()
          if ($('.woo-dialog-ctrl'))
            $$('.woo-dialog-ctrl', '.woo-button-main').click()

          i > 5 && window.location.reload()
        }
      }

      if (url.includes('/profile')) {
        // 旧
        if ($('a[action-type="fl_menu"]')) {
          $('a[action-type="fl_menu"]').click()
          $('a[title="删除此条微博"]').click()
          $('a[action-type="ok"]').click()
          $('a[title="取消快转"]').click()
        }
      }
      if (url.includes('//weibo.com/fav')) {
        // 旧，github网友提供 https://github.com/Syukkic
        if ($('a[action-type="fl_favorite"]')) {
          $('a[action-type="fl_favorite"]').click()
          $('a[action-type="ok"]').click()
        }
      }

      // 新
      if (url.includes('//weibo.com/u/')) {
        if ($('.vue-recycle-scroller__item-view .deletedToolbar_toolbarFull_1dOfW span')) {
          $('.deletedToolbar_toolbarFull_1dOfW span').click()
          $('.vue-recycle-scroller__item-view .deletedToolbar_toolbarFull_1dOfW').remove()
        }
        else {
          if ($('i[title="更多"]') || $('i[title="负反馈"]')) {
            if ($('i[title="更多"]'))
              $('i[title="更多"]').click()

            if ($('i[title="负反馈"]'))
              $('i[title="负反馈"]').click()

            const item = $All('.woo-pop-item-main')
            if (item.length) {
              if (item.length > 3) {
                item.forEach(item => item.textContent === '删除' && item.click())
                count.value = 0
              }
              else {
                item.forEach(item => item.textContent === '取消快转' && item.click())
                setTimeout(() => {
                  count.value = 1
                }, 1000)
              }
            }

            $('.woo-dialog-ctrl') && $$('.woo-dialog-ctrl', '.woo-button-main').click()
            if ($('.deletedToolbar_toolbarFull_1dOfW'))
              $('.deletedToolbar_toolbarFull_1dOfW').click()

            if (count.value) {
              count.value = 0
              setTimeout(() => {
                window.location.reload()
              }, 1000)
            }
            i > 160 && window.location.reload()
          }
        }
      }
    }, 1000 * i)
  }
}

function onStart() {
  console.log('开始')
  localStorage.delWeibo = 'start'
  start.value = 1
  del()
}

function onEnd() {
  console.log('结束')
  localStorage.delWeibo = 'end'
  start.value = 0
  window.location.reload()
}

watchEffect(() => {
  if (localStorage.delWeibo === 'start') {
    del()
    start.value = 1
  }
})
</script>

<template>
  <button v-if="start" class="del-weibo" :class="{ 'del-weibo-end': start }" @click="onEnd">
    结束
  </button>
  <button v-else class="del-weibo" @click="onStart">
    开始删除
  </button>
</template>

<style scoped>
.del-weibo {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999999;
  background-color: #ff8200;
  color: #fff;
  padding: 6px 16px;
  border: none;
  border-radius: 100px 0 0 100px;
  cursor: pointer;
}
.del-weibo-end {
  background-color: #ff84007a;
}
</style>
