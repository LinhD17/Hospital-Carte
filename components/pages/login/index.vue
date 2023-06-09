<template>
  <div class="login-wrap">
    <h1 class="login-heading">
      <img src="@/assets/img/waroku_hk.svg" alt="Waroku ホスピタルカルテ" />
    </h1>
    <div class="login-main">
      <div class="login-content">
        <p class="login-hospital-name">ワロク（HK）VN病院X</p>
        <v-form class="login-form">
          <!-- user name  -->
          <div class="login-name mb-3">
            <p class="login-label">ユーザー名</p>
            <v-text-field
              v-model="state.name"
              name="username"
              placeholder="テキストを入力"
              tabindex="0"
              variant="solo"
              dense
              @keyup.enter="moveFouces"
              style="border: 1px solid #c7ccce; height: 58px;"
            ></v-text-field>
          </div>
          <!-- password -->
          <div class="login-password mb-3">
            <p class="login-label">パスワード</p>
            <v-text-field
              v-model="state.pass.password"
              :type="show ? 'text' : 'password'"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              placeholder="テキストを入力"
              tabindex="1"
              dense
              variant="solo"
              @click:append="show = !show"
              @keyup.enter="login"
              style="border: 1px solid #c7ccce; height: 58px;"
            ></v-text-field>
          </div>

            <!-- error -->
              <!-- chưa xử lý được ẩn-hiện password -->
            <div v-if="state.errorText.lenght" class="login-error mb-3">
              <p v-for="item in state.errorText" :key="item">
                <v-icon x-small color="danger" class="mr-2">
                  mdi-alert-circle-outline
                </v-icon>
                {{ item  }}
              </p>
            </div>

            <!-- login button -->
            <!-- disabled- vô hiệu hoá, nút sẽ bị vô hiệu hoá khi giá trị của 1 trong 2 ô bị trống -->
            <v-btn
              :disabled="state.name === '' || state.pass.password ===''"
              class="login-button"
              :loading="loadingLogin"
              tabindex="2"
              color="primary"
              rounded
              style="background-color: #1ea0dc"
            >
              ログイン
            </v-btn>
          </v-form>

          <div class="login-desc">
            <p>Waroku ホスピタルカルテ 1.0.1</p>
            <p>Copyright RESCHO Inc. All Rights Reserved.</p>
          </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { usePassword } from '~/hooks/General/Form/usePassword';
  import { ref, reactive } from 'vue'
  // import { useLogin, LoginInfo } from '~/hooks/Login/useLogin'

  const show = ref(false);

  const state = reactive({
      name: '',
      pass: usePassword(),
      errorText: [] as string[],
  })
  // const loginInfo = reactive<LoginInfo>({
  //     login_id: 'doctor_vn_test10',
  //     login_password: 'waroku-dev-password',
  // })
  // const { errorInfo, fetchLogin, loading: loadingLogin} = useLogin()

  //handling login: ログイン時の処理 
  //async được sử dụng để khai báo một hàm bất đồng bộ và hàm sẽ luôn trả về một giá trị. Nếu Promise không được thực thi, JavaScript sẽ tự động kết thúc quá trình.
  // const login = async () => {
  //     loginInfo.login_id = state.name
  //     loginInfo.login_password = state.pass.password
  //     //await: Await được sử dụng để chờ một Promises trong một khối Async, công dụng dễ hiểu của Await là “kêu” JavaScript phải chờ cho đến khi nào có một Promise trả kết quả. 
  //     await fetchLogin(loginInfo)
  //     insertErrorText(errorInfo)
  // }
  //set up error message: エラー文設定
  const insertErrorText = (errorInfo: string[]) => {
      state.errorText = []
      if (!errorInfo || errorInfo.length === 0) {
          return 
      }
      state.errorText = errorInfo
  }
  //focus movment フォーカス移動
  const moveFouces = (event: { target:  HTMLButtonElement }) => {
      const tabindex = Number(event.target.getAttribute('tabindex'))
      const nextTabindex = tabindex + 1 
      const item = document.querySelector(
          `[tabindex="${nextTabindex}"]`
      ) as HTMLElement | null
      if (item != null) {
          item.focus()
      }
  }
  //auto focus 
  onMounted(() => {
      const item = document.querySelector(
          `[tabindex="0"]`
      ) as HTMLElement | null 
      if (item != null) {
          item.focus()
      }
  })
</script>

<style lang="scss" scoped>
.login-wrap{
    text-align: center !important;
    width: 100% !important;
    display: block;
    &:deep(.v-text-field .v-input__slot) {
      height: 37px;
      input {
        max-height: 37px;
      }
    }
}
  .login-heading {
    text-align: center;
    padding-top: 8% ;
  }
  .login-main {
    display: flex;
    justify-content: space-around;
    padding-bottom: 264px; //need to fix login-wrap's height fit with background
  }
  .login-content {
    text-align: center;
    width: 100%;
    margin-top: 20px;
    max-width: 400px;
    border: 1px solid #c7ccce;
    border-radius: 10px;
    background-color: #ffffff;
    padding: 50px;
  }
  .login-hospital-name {
    font-size: large;
  }
  .login-form {
    margin-top: 14px;
  }
  .login-label {
    margin-bottom: 7px !important;
    font-size: 14px;
    color: #808080;
  }
  .login-error {
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid #fe9ec3;
    background-color: #ffebeb;
    p {
      margin-bottom: 0;
    }
  }
  .login-button {
    width: 100%;
    font-size: 14px;
    height: 38px !important;
    color: white;
    background-color: #1ea0dc!important;
  }
  .login-button:hover {
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
  
  