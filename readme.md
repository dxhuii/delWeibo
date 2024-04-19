## 安装地址

- [点击安装](https://github.com/dxhuii/delWeibo/raw/master/dist/delwb.user.js)
- [批量删除新浪微博博文 greasyfork(油猴脚本) 安装地址](https://greasyfork.org/zh-CN/scripts/376618-%E6%89%B9%E9%87%8F%E5%88%A0%E9%99%A4%E6%96%B0%E6%B5%AA%E5%BE%AE%E5%8D%9A%E5%8D%9A%E6%96%87)

## 说明

- 一个可以批量删除新浪微博的小工具，搜索了好多，找不到合适的，刚好找到一段脚本
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

- [CHANGELOG](https://github.com/dxhuii/delWeibo/blob/master/CHANGELOG.md)
