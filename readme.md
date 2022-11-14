## 安装地址

- [点击安装](https://github.com/dxhuii/delWeibo/raw/master/dist/delwb.user.js)
- [批量删除新浪微博博文 greasyfork(油猴脚本) 安装地址](https://greasyfork.org/zh-CN/scripts/376618-%E6%89%B9%E9%87%8F%E5%88%A0%E9%99%A4%E6%96%B0%E6%B5%AA%E5%BE%AE%E5%8D%9A%E5%8D%9A%E6%96%87)

## 说明

- 一个可以批量删除新浪微博的小工具，搜索了好多，找不到合适的，刚好找到一段脚本
- 来自： `https://weibo.com/ttarticle/p/show?id=2309404326491147087425`
- 由于这个只能删除当前页面，刷新之后还得手动再次执行，比较麻烦。特做此插件，可以在浏览器刷新之后自动执行。

## 安装好脚本

- 注意：在打开之前一定要想清楚，是否所有微博都要删除，这个工具是按顺序删除，没有排除功能
- 脚本只会在个人中心生效，进到对应的页面，需要刷新一下页面才能生效。如： `https://weibo.com/5665042424/profile` (旧) `https://weibo.com/u/5665042424` (新)
- 在浏览器右侧正中间增加了开始按钮，点击开始就开始删除微博博文了，中途想中断，点击结束按钮即可。

## 感谢

- `https://github.com/Einsamleser` 提供的批量取消微博收藏
- `https://github.com/lisonge/vite-plugin-monkey` 
- 由于我操作失误没能合并 pull，现在手动添加一下。

## 切记

- 使用完了，记得关掉，或者删除掉，不然只要打开微博主页，就会进行删除微博。

## 更新

### v1.1.3

- 立即删除按钮样式修改
- 增加快转特殊情况的删除 感谢 [@zhudashi](https://github.com/zhudashi)([#8](https://github.com/dxhuii/delWeibo/issues/8)) 提供的功能

### v1.1.2
- 日常更新，优化

### v1.1.1

- 如果遇到快转，删除掉后会主主动刷新页面

### v1.1.0

- 在浏览器右侧正中间增加了开始按钮，点击开始就开始删除微博博文了，中途想中断，点击结束按钮即可。

### v1.0.11

- 更改了 for( i<1000;)
- 延迟了 reload() 的页面判断为 i > 160
- 感谢 github 网友提供的优化[#6](https://github.com/dxhuii/delWeibo/issues/6)([hhstore](https://github.com/hhstore))

### v1.0.10

- 根据网友提供的方法修改了一下，应该是新版微博增加了功能 [#5](https://github.com/dxhuii/delWeibo/issues/5)

### v1.0.9

- 增加取消快转
- 优化删除功能

### v1.0.8

- 修复有时会卡在无法推广的微博条目上 [#3](https://github.com/dxhuii/delWeibo/pull/3)

### v1.0.7

- 1.增加微博取消收藏对新版的支持
- 2.由于新版微博切换页面不刷新页面，所以，切换到相应的页面，请手动刷新下。

### v1.0.6

1.修复 BUG

### v1.0.5

1.增加微博取消收藏

### v1.0.4

1.更新对新浪微博新版的支持。

### v1.0.3

- 1.cookie 名字叫 delWeibo 值为 1 只做了简单的判断 delWeibo=1 就会删除微博，如果不想再删除微博博文了，可以打开微博其他页面，删除掉此 cookie，或者退出浏览器，会自动删除。

### v1.0.2

- 1.修复刷新 cookie 会被删除的问题

### v1.0.1

- 1.去掉了 jquery 依赖
- 2.增加判断删除前判断
- 3.弹出提示时，如果你点了取消，可以刷新一下，会再次弹出提示。
