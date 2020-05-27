<template>
  <div class="login-box">
    <p style="float: left;margin-top: 10px;color: black;">
      <van-icon name="arrow-left" @click='left'/>密码修改</p>
    <p style="text-align: left;padding-left: 30px;padding-top: 70px;">请输入原密码及新密码</p>
    <el-form :model="form" :rules="ruleForm" ref="form" class="login-form">

      <el-form-item prop="username">
        <el-input v-model="form.username" autocomplete="new-password" placeholder='请输入原密码'></el-input>
      </el-form-item>
      <el-form-item prop="password" type='password'>
        <el-input v-model="form.password" autocomplete="new-password" placeholder='请输入新密码'></el-input>
      </el-form-item>
      <el-form-item prop="password1" type='password'>
        <el-input v-model="form.password1" autocomplete="new-password" placeholder='请再次输入新密码'></el-input>
      </el-form-item>
      <el-form-item>
        <!-- to='/Class' -->
        <el-button type="primary" @click="submit" class="login-btn" v-loading="logining">修 改</el-button>
        <!-- <router-link tag='el-button' @click="submit" v-loading="logining" type="primary" class="login-btn" style="background-color: #409EFF;color: white;">登 录</router-link> -->
      </el-form-item>
    </el-form>
    <h5 style="color: #FFF;text-align: center;">Copyright &copy;, All Rights Reserved.</h5>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        logining: false,
        form: {
          // username:'admin',
          // password:'admin'
        },
        ruleForm: {
          username: [{
            required: true,
            message: '原密码不能为空,请填写原密码',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '新密码不能为空,请填写新密码',
            trigger: 'blur'
          }],
          password1: [{
            required: true,
            message: '再次输入新密码不能为空,请再次填写新密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      left() {
        this.$router.go(-1);
      },
      submit(event) {
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.logining = true;
            // if (this.form.username != '' &&
            //   this.form.password != '') {
            //   this.logining = false;
            //   sessionStorage.setItem('username', this.form.username);
            //   this.$router.replace({
            //     path: '/login'
            //   })
            // } else
            if (this.form.username != '123456') {
              this.logining = false;
              this.$alert('原密码不一样,请重新输入!', '提示', {
                confirmButtonText: 'ok'
              })
            } else if (this.form.password != this.form.password1) {
              this.logining = false;
              this.$alert('两次输入密码不一样,请重新输入!', '提示', {
                confirmButtonText: 'ok'
              })
            } else {
              this.logining = false;
              this.$router.replace({
                path: '/gerenzhongxin1'
              })
            }
            //  else {
            //   this.logining = false;
            //   this.$alert('用户名或密码不正确!', '提示', {
            //     confirmButtonText: 'ok'
            //   })
            // }
          } else {
            console.log('error submit!');
            return false;
          }
        })
      },
      login() {
        this.$refs.form.resetFields();
      }
    }
  }
</script>

<style lang="scss" scoped>
  body {
    margin: 0px;
    padding: 0px;
  }

  .login-box {
    // width: 100%;
    // height: 100%;
    // overflow: hidden;
    // background: #0099FF;

    .login-form {
      border-radius: 5px;
      background-clip: padding-box;
      margin: 50px auto;
      width: 350px;
      padding: 35px 35px 15px 35px;
      // background: #f5f5f5;
      border: 1px solid #eaeaea;
      //box-shadow: 0 0 5px #cac6c6;

      .title {
        margin: 0px auto 40px auto;
        text-align: center;
        color: #0099FF;
        font-size: 23px;
      }

      .btn-eye {
        cursor: pointer;
      }

      .text-danger {
        color: #F56C6C;
      }

      .login-btn {
        margin: 35px 0 10px 0;
        width: 100%;
      }
    }
  }
</style>
