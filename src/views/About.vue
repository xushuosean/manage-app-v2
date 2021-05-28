<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
    <el-radio label="1">备选项</el-radio>
    <test-jsx />
  </div>
</template>

<script lang='ts'>
import TestJsx from '../components/test-jsx.vue';

export default {
  components: {
    'test-jsx': TestJsx,
  },
};
</script>
