<template>
  <el-dialog class="res_dialog" title="用户注册" :visible.sync="dialogFormVisible">
    <el-form :model="form" ref="form" :rules="rules">
      <el-form-item label="头像" :label-width="formLabelWidth" class="is-required" prop="nickname">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <el-input id="inputCover" style="display:none" v-model="imageUrl"/>
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="昵称" :label-width="formLabelWidth" class="is-required" prop="nickname">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" :label-width="formLabelWidth" class="is-required" prop="email">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机" :label-width="formLabelWidth" class="is-required" prop="phone">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth" class="is-required" prop="password">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="图形码" :label-width="formLabelWidth" prop="code">
        <el-row>
          <el-col :span="16">
            <el-input class="grid-content bg-purple" placeholder="请输入验证码！" v-model="form.imgCode"></el-input>
          </el-col>
          <el-col :span="8" class="text_align_right">
            <img class="registerCode" src="../../../assets/images/login_captcha.png" />
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item label="验证码" :label-width="formLabelWidth" prop="code">
        <el-row>
          <el-col :span="16">
            <el-input class="grid-content bg-purple" placeholder="请输入验证码！" v-model="form.code"></el-input>
          </el-col>
          <el-col :span="8" class="text_align_right">
            <el-button>获取用户验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {
      form: {
        icon: "",
        nickname: "",
        email: "",
        phone: "",
        password: "",
        imgCode: "",
        code: ""
      },
      rules: {
        // icon: [{ required: true, message: "请上传头像！", trigger: "blur" }],
        nickname: [
          { required: true, message: "昵称不能为空！", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱不饿能为空！", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请上传头像", trigger: "blur" },
          { min: 11, max: 11, message: "手机号码不符合规范！", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        imgCode: [
          { required: true, message: "请上传头像", trigger: "blur" },
          { min: 4, max: 4, message: "输入不正确！", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请上传头像", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 5 到 10 个字符", trigger: "blur" }
        ]
      },
      imageUrl: "",
      dialogFormVisible: false,
      formLabelWidth: "67px"
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      window.console.log(this.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style lang="less">
.el-dialog__wrapper.res_dialog {
  .el-dialog {
    position: relative;
    margin: 0 auto;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 600px;
    margin-top: 0px !important;

    .el-dialog__header {
      background: linear-gradient(
        225deg,
        rgba(20, 147, 250, 1),
        rgba(1, 198, 250, 1)
      );
      text-align: center;
      height: 53px;

      .el-dialog__title {
        width: 73px;
        height: 17px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: rgba(254, 254, 254, 1);
      }
    }
    .text_align_right {
      text-align: right;

      .registerCode {
        width: 143px;
        height: 41px;
      }
    }

    .dialog-footer {
      text-align: center;
    }

    .el-form-item.is-required:not(.is-no-asterisk)
      > .el-form-item__label:before {
      content: "*";
      color: #f56c6c;
      margin-right: 4px;
    }
    .avatar-uploader {
      text-align: center;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409eff;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      display: block;
      width: 179px;
      height: 179px;
      border: 1px solid rgba(206, 206, 206, 1);
      border-radius: 4px;
    }
  }
}
</style>