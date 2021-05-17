import generateColors from './color.js'
import eleCssString from './theme/theme-chalk.js'
import {primaryColorFn} from './theme/primaryColor.js'
let ThemeConfig = {
  data() {
    return {
      colors: {
        primary: '#2e2e2e'
      },
      originalStyle: '',
      primaryColor: '#2e2e2e',
      style: null
    }
  },
  methods: {
    /**
     * 替换颜色
     * @param data
     * @returns {*}
     */
    getStyleTemplate (data) {
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
        data = data.replace(new RegExp(key, 'ig'), value)
      })
      return data
    },
    /**
     * 生成elementUI样式
     */
    writeNewStyle () {
      let cssText = this.originalStyle
      Object.keys(this.colors).forEach(key => {
        cssText = cssText.replace(new RegExp(`(:|\\s+)${key}`, 'g'), `$1${this.colors[key]}`)
      })
      let style = document.getElementById('ele-theme');
      if (!style) {
        style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'ele-theme';
        style.innerText = cssText;
        document.head.appendChild(style);
      } else {
        style.innerText = cssText;
      }
    },
    /**
     * 获取elementUI的官方样式
     */
    getIndexStyle () {
      this.originalStyle = this.getStyleTemplate(eleCssString)
      this.colors = Object.assign(this.colors, generateColors(this.colors.primary))
      this.writeNewStyle()
    },
    /**
     * 获取自定义的主题样式
     */
    genStyle() {
      var style = document.getElementById('self-theme');
      if (!style) {
        style = document.createElement('style');
        style.type = 'text/css';
        style.id = 'self-theme';
        document.head.appendChild(style);
        this.genBaseColor(style);
      } else {
        this.genBaseColor(style);
      }
    },
    /**
     * 生成自定义样式
     * @param style
     */
    genBaseColor(style) {
      let baseColor = primaryColorFn({
        mainColor:this.colors.primary
      });
      style.innerHTML = baseColor;
    },
    async init() {
      // elementUI的主色系
      this.getIndexStyle();
      // 生成自定义主题样式
      this.genStyle();
    }
  },
  mounted() {
    this.init();
  }
}

export default  ThemeConfig;
