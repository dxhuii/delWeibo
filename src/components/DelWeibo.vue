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
    setTimeout(function () {
      if (url.indexOf('//weibo.com/u/page/fav/') !== -1) {
        // 新
        if ($('i[title="更多"]')) {
          $('i[title="更多"]').click()
          $All('.woo-pop-item-main')[0].click()
          if ($('.woo-dialog-ctrl')) {
            $$('.woo-dialog-ctrl', '.woo-button-main').click()
          }
          i > 5 && window.location.reload()
        }
      }

      if (url.indexOf('/profile') !== -1) {
        // 旧
        if ($('a[action-type="fl_menu"]')) {
          $('a[action-type="fl_menu"]').click()
          $('a[title="删除此条微博"]').click()
          $('a[action-type="ok"]').click()
          $('a[title="取消快转"]').click()
        }
      }
      if (url.indexOf('//weibo.com/fav') !== -1) {
        // 旧，github网友提供 https://github.com/Syukkic
        if ($('a[action-type="fl_favorite"]')) {
          $('a[action-type="fl_favorite"]').click()
          $('a[action-type="ok"]').click()
        }
      }

      if (url.indexOf('//weibo.com/u/') !== -1) {
        // 新
        if ($('i[title="更多"]') || $('i[title="负反馈"]')) {
          if ($('i[title="更多"]')) {
            $('i[title="更多"]').click()
          }
          if ($('i[title="负反馈"]')) {
            $('i[title="负反馈"]').click()
          }
          const item = $All('.woo-pop-item-main')
          if (item.length) {
            if (item.length > 3) {
              item.forEach(item => item.innerText === '删除' && item.click())
              count.value = 0
            } else {
              item.forEach(item => item.innerText === '取消快转' && item.click())
              setTimeout(() => {
                count.value = 1
              }, 1000)
            }
          }

          $('.woo-dialog-ctrl') && $$('.woo-dialog-ctrl', '.woo-button-main').click()
          if ($('.deletedToolbar_toolbarFull_1dOfW')) {
            $('.deletedToolbar_toolbarFull_1dOfW').click()
          }
          if (count.value) {
            count.value = 0
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }
          i > 160 && window.location.reload()
        }
      }
    }, 1000 * i)
  }
}

const onStart = () => {
  console.log('开始')
  localStorage.delWeibo = 'start'
  start.value = 1
  del()
}

const onEnd = () => {
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
  <button class="del-weibo" v-if="start" @click="onEnd">结束</button>
  <button class="del-weibo" v-else @click="onStart">开始</button>
</template>

<style scoped>
.del-weibo {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9999999;
}
</style>
