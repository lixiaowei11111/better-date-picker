<template>
  <div id="app">
    <SBElDatePicker
      :picker-options="{
        firstDayOfWeek: 7,
        showWeekNumber: true,
      }"
      v-model="week"
      type="weekrange"
      format="yyyy 年第 WW 周"
      placeholder="选择周"
    ></SBElDatePicker>
    <!-- 
      周数显示 解决方案
      https://mp.weixin.qq.com/s/4X-Hk7CwrjdNfJRdP5EPQw
      https://blog.csdn.net/qq_42120178/article/details/112695295
      https://blog.csdn.net/baobao_123456789/article/details/115332800
     -->
  </div>
</template>

<script>
import SBElDatePicker from "./components/date-picker/index";

export default {
  name: "App",
  components: {
    SBElDatePicker,
  },
  data(){
    return{
      week:null
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
