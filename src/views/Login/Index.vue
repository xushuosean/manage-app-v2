<template>
  <div class="loginForm">
    <el-form :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
    </el-form>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">提交</el-button>
    </el-form-item>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
// import { Login } from '../../utils/api/Login';

export default {
  setup() {
    const form = reactive({
      username: '',
      password: '',
    });

    const submitForm = function () {
      // Login(form).then((res) => {
      //   console.log(res);
      // });
    };

    return {
      form,
      submitForm,
    };
  },
};
</script>

<style lang="less" scoped>
.loginForm {
  width: 300px;
  margin: 0 auto;
}
</style>
