<template>
  <div>
  </div>
</template>
<script>
  import {genBaseColor} from '@/assets/common/theme.js'
  export default{
    name: 'selected-theme',
    data(){
      return {
        cspNonce: '',
        style: null,
      }
    },
    props: {
      themeColor: {
        type: String
      }
    },
    computed: {
      computedTheme: function () {
        console.log('computedTheme', this.themeColor);
        return this.themeColor || 'green'
      },
      generateStyles: function () {
        let theme = this.computedTheme;
        let css = genBaseColor('primary', theme)
        return css;
      }
    },
    watch: {
      generateStyles: function () {
        console.log('generatedStyles');
        this.applyTheme();
      }
    },
    methods: {
      applyTheme(){
        console.log('applyTheme');
        this.style.innerHTML = this.generateStyles;
      },
      genStyle(){
        var style = document.getElementById('zz-auto-theme');
        if (!style) {
          style = document.createElement('style');
          style.type = 'text/css';
          style.id = 'zz-auto-theme';
          style.setAttribute('nonce', this.cspNonce);
          document.head.appendChild(style);
        }
        this.style = style;
      },
    },
    created: function () {
      this.genStyle();
      this.applyTheme();
    }
  }
</script>
