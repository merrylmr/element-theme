<template>
  <div>
    <div>
      <el-color-picker
        @change="changeTheme"
        v-model="color5"
        show-alpha
        :predefine="predefineColors">
      </el-color-picker>
      <select-theme :themeColor="selectedTheme"></select-theme>
    </div>
    <el-button type="primary">lallaaa</el-button>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <el-menu
      :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import selectTheme from '@/components/Theme.vue'
  export default {
    data() {
      return {
        color5: 'rgba(255, 69, 0, 0.68)',
        color6: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        activeIndex: '1',
        activeIndex2: '1',
        navBg: '#545c64',
        selectedTheme: 'red',
        radio: '1'
      }
    },
    components: {selectTheme},
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      // 修改主题色
      changeTheme(val){
        console.log('111:changeTheme', val);
        this.selectedTheme = val;
      }
    }
  };
</script>
