// 获取到element对应版本的css
import generateColors from "./utils/color";

const v = require('element-ui/package.json').version

function getElementCss(version) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        const url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
        xhr.onreadystatechange = () => {
            // 获取到数据
            if (xhr.status === 200 && xhr.readyState === 4) {
                const res = xhr.responseText.replace(/@font-face{[^}]+}/, '')
                resolve(res)
            }
        }
        xhr.onerror = (err) => {
            reject(err);
        }
        xhr.open('GET', url)
        xhr.send()
    })
}

// 根据主题色替换变量
function replaceVarCss(cssStr, primary) {
    const colorMap = {
        '#3a8ee6': 'shade-1',
        '#409eff': 'primary',
        '#53a8ff': 'light-1',
        '#66b1ff': 'light-2',
        '#79bbff': 'light-3',
        '#8cc5ff': 'light-4',
        '#a0cfff': 'light-5',
        '#b3d8ff': 'light-6',
        '#c6e2ff': 'light-7',
        '#d9ecff': 'light-8',
        '#ecf5ff': 'light-9'
    }

    Object.keys(colorMap).forEach(key => {
        const value = colorMap[key]
        cssStr = cssStr.replace(new RegExp(key, 'ig'), value)
    })

    const color = Object.assign({}, generateColors(primary))
    // 第二次正则
    Object.keys(color).forEach(key => {
        cssStr = cssStr.replace(new RegExp(`(:|\\s+)${key}`, 'g'), `$1${color[key]}`)
    })
    return cssStr;
}

// 插入到dom中
function insertDomWithCssStr(cssStr) {
    let cssDom = document.getElementById('style-chalk');
    console.log('style-chalk', cssDom)
    if (!cssDom) {
        cssDom = document.createElement('style');
        cssDom.id = 'style-chalk'
        document.head.appendChild(cssDom);
    }
    cssDom.innerHTML = cssStr
}


async function ElementTheme(primaryColor, version = v) {
    try {
        const cssStr = await getElementCss(version);
        const normalizeCss = replaceVarCss(cssStr, primaryColor)
        insertDomWithCssStr(normalizeCss)
    } catch (err) {
        console.error('生成自定义主题色样式出错', err)
    }
}


export default ElementTheme




