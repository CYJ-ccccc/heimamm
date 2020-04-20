<template>
  <div class="login">
    <div class="loginArea">
      <div class="title">
        <img src="../../assets/images/titleIcon.png" alt class="titleIcon" />
        <span class="titleContent">黑马面面</span>
        <span class="titleLine"></span>
        <span class="titleLogin">用户登录</span>
      </div>
      <!-- 使用elementUI form表单完成 -->
      <el-form ref="form" :model="form" label-width="0px" :rules="rules">
        <el-form-item prop="name">
          <el-input
            v-model="form.name"
            prefix-icon="el-icon-user"
            class="inputName"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            prefix-icon="el-icon-unlock"
            class="inputPassword"
            placeholder="请输入用户密码"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <!-- <el-input v-model="form.name" prefix-icon="el-icon-key" class="inputCode"></el-input> -->
          <el-row :gutter="20">
            <el-col :span="16">
              <el-input class="grid-content bg-purple" placeholder="请输入验证码！" v-model="form.code"></el-input>
            </el-col>
            <el-col :span="8">
              <img class="loginCode" src="../../assets/images/login_captcha.png" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item class="checkBox" prop="ischecked">
          <el-checkbox v-model="form.ischecked">
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>和
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" class="btnLogin">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onResiter" class="btnRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <img src="../../assets/images/login_banner_ele.png" alt class="rightImg" />
    <register ref="register" />
  </div>
</template>

<script>
import register from "./components/register";
export default {
  data() {
    return {
      form: {
        name: "",
        password: "",
        code: "",
        ischecked: []
      },
      rules: {
        name: [
          { required: true, message: "请输入正确的用户名", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入正确的用户名", trigger: "blur" },
          { min: 4, max: 4, message: "长度在 1 到 4 个字符", trigger: "blur" }
        ],
        ischecked: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ]
      }
    };
  },
  components: {
    register
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功！",
            type: "success"
          });
        } else {
          this.$message.error("登录失败！");
        }
      });
    },
    onResiter() {
      this.$refs.register.dialogFormVisible = true;
    }
  }
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(20, 147, 250, 1),
    rgba(1, 198, 250, 1)
  );
  display: flex;
  justify-content: space-around;
  // justify-content: center;
  align-items: center;

  .loginArea {
    width: 478px;
    height: 550px;
    padding: 48px 42px 86px;
    background: rgba(245, 245, 245, 1);

    .title {
      width: 100%;
      // height: 100px;
      display: flex;
      // justify-content: center;
      align-items: center;

      .titleIcon {
        width: 22px;
        height: 17px;
      }

      .titleContent {
        width: 100px;
        // height: 22px;
        font-size: 24px;
        margin-left: 20px;
        font-family: SourceHanSansCN;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
      .titleLine {
        width: 1px;
        height: 28px;
        margin: 0 14px;
        border: none;
        background: rgba(199, 199, 199, 1);
      }
      .titleLogin {
        width: 95px;
        // height: 21px;
        font-size: 22px;
        font-family: PingFangSC;
        font-weight: 400;
        color: rgba(12, 12, 12, 1);
      }
    }
    .inputName {
      margin-top: 27px;
    }
    .loginCode {
      width: 100%;
    }
    .checkBox {
      line-height: 40px;
      margin-top: 20px;
    }
    .btnLogin,
    .btnRegister {
      width: 100%;
    }
  }
}
</style>