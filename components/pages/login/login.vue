<template>
  <v-app>
    <v-main>
      <v-container fluid fill-height class="rounded-custom">
        <v-layout column align-center justify-center class="login-content">
          <v-flex xs12 sm8 md4>
            <img src="@/assets/img/waroku_hk.svg" alt="Waroku ホスピタルカルテ" />
            <v-card class="elevation-12">
              <v-card-text>
                <v-form class="formpadding">
                  <div>
                    <p class="para-align">ユーザー名</p>
                    <v-text-field
                      name="username"
                      placeholder="テキストを入力"
                      v-model="username"
                      type="text"
                      outlined
                      class="input-field"
                      :rules="[v => !!v || 'Username is required']"
                    ></v-text-field>
                  </div>
                  <div>
                    <p>パスワード</p>
                    <v-text-field
                      v-model="password"
                      :type="show ? 'text' : 'password'"
                      :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                      @click:append="show = !show"
                      placeholder="テキストを入力"
                      outlined
                      class="input-field"
                      :rules="[v => !!v || 'Password is required']"
                    ></v-text-field>
                  </div>
                </v-form>
              </v-card-text>
              <v-card-actions class="justify-center">
                <v-btn class="loginbutton rounded-pill light-blue darken-1" @click="login">ログイン</v-btn>
              </v-card-actions>
              <div class="login-desc login-desc-padding">
                <p>Waroku ホスピタルカルテ 1.0.1</p>
                <p>Copyright RESCHO Inc. All Rights Reserved.</p>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { ref } from 'vue';

export default {
  name: 'LoginPage',
  setup() {
    const valid = ref(false);
    const username = ref('');
    const password = ref('');
    const show = ref(false);
    
    function login() {
      if (username.value === 'sunita' && password.value === 'sunita') {
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
};
</script>
<style lang="scss" scoped>
.login-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.para-align {
  margin-bottom: 7px !important;
  font-size: 14px;
  color: #808080;
}
.formpadding {
  padding: 30px;
  padding-bottom: 0;
}
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
.rounded-custom {
  border-radius: 20px;
}
</style>

