## 更新

## v1.1.6
- 升级依赖

## v1.15 及之后版本
- [releases](https://github.com/dxhuii/delWeibo/releases)

## v1.1.4
- 升级依赖，修复已知问题

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
