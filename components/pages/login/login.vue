<template>
  <div class="login-wrap">
    <div class="login-heading">
      <img src="@/assets/img/waroku_hk.svg" alt="Waroku ホスピタルカルテ" />
    </div>
    <div class="login-main">
      <div class="login-content">
        <v-form class="login-form">
          <div class="login-name">
            <p class="login-label">ユーザー名</p>
            <v-text-field
              v-model="username"
              name="username"
              placeholder="テキストを入力"
              type="text"
              outlined
              class="input-field"
              :rules="[v => !!v || 'Username is required']"
            ></v-text-field>
          </div>
          <div class="login-password">
            <p class="login-label">パスワード</p>
            <v-text-field
              v-model="password"
              name="password"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              outlined
              class="input-field"
              :rules="[v => !!v || 'Password is required']"
              placeholder="テキストを入力"
              @click:append="show = !show"
            ></v-text-field>
          </div>
          <v-card-actions class="justify-center">
            <v-btn class="loginbutton rounded-pill light-blue darken-1" @click="login">ログイン</v-btn>
          </v-card-actions>
        </v-form>
        
        <div class="login-desc login-desc-padding">
          <p>Waroku ホスピタルカルテ 1.0.1</p>
          <p>Copyright RESCHO Inc. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginPage',
  setup() {
    const valid = ref(false);
    const username = ref('');
    const password = ref('');
    const show = ref(false);
    
    function login() {
      if (username.value === 'doctor_vn_test10' && password.value === 'waroku-dev-password') {
        console.log('Login success!');
      } else {
        console.log('Login failed!');
      }
    }
    
    return {
      valid,
      username,
      password,
      login,
      show,
    };
  },
})

</script>
<style lang="scss" scoped>
.login-wrap{
  text-align: center !important;
  width: 100%;
  display: block;
  flex-direction: row;
  //position: absolute;
}
.login-heading {
  text-align: center;
  padding-top: 15% ;
}
.login-main {
  display: flex;
  justify-content: space-around;
}
.login-content {
  text-align: center;
  width: 100%;
  margin-top: 20px;
  max-width: 400px;
  border: 1px solid #c7ccce;
  border-radius: 10px;
  background-color: #ffffff;
  padding: 50px 50px 0;
}
.login-form {
  margin-top: 14px;
}
.login-label {
  margin-bottom: 7px !important;
  font-size: 14px;
  color: #808080;
}
// .login-error {
//   padding: 5px 10px;
//   border-radius: 4px;
//   border: 1px solid #fe9ec3;
//   background-color: #ffebeb;
//   p {
//     margin-bottom: 0;
//   }
// }

.login-desc-padding {
  padding: 30px;
  padding-bottom: 50px;
  padding-top: 0px;
}
.loginbutton {
  width: 80%;
  font-size: 14px;
  height: 42px !important;
  color: white;
  background-color: #07a1c0 !important;
}
.loginbutton:hover {
  background-color: white !important;
  color: #07a1c0 !important;
  outline: 1px solid #07a1c0;
}
.login-desc {
margin-top: 10px;
  text-align: center;
  p {
   margin-bottom: 0px;
    font-size: 12px;
    color: #333333;
  }
}
.login-name {
  text-align: left;
}
.login-password {
  text-align: left;
}
</style>

