## 介绍

动态传入主题色，生成elementUI的主题色； 

应用场景：同一个系统，不同用户看到的皮肤不一样

## 使用

1. 安装

```javascript
npm
install
element - theme
```

2 .引入插件

```javascript
import ElementTheme from 'ElementTheme'
```

3.执行此方法

```javascript
mounted() {
    ElementTheme('#f00', '2.5.11')
}
```
