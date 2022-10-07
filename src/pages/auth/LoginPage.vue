<template lang="pug">
#login.flex.flex-row.flex-nowrap
  #login-form.flex.justify-center.my-10(class="w-3/5")
    .text-h4.text-weight-bold Sign in
    #login-form-content.w-md.px-10.m-10
      q-input.mb-6(filled, v-model="form.username", label="Username", placeholder="Enter Username.", stack-label)
      q-input.mb-6(filled, v-model="form.password", label="Password", placeholder="Enter Password.", stack-label, :type="showPassword ? 'password' : 'text'")
        template(v-slot:append)
          q-icon.cursor-pointer(:name="showPassword ? 'visibility_off' : 'visibility'", @click="showPassword = !showPassword")
      .row.mb-6
        q-checkbox(v-model="form.remember", label="Remember me", :true-value="true", :false-value="false", dense)
        q-space
        a(href="https://www.baidu.com") Forget password?
      q-btn.full-width(color="primary", label="Sign in", size="md")
  #login-graph.bg-gray-500.flex.justify-center.items-center(class="w-2/5")
    img(:src="Login")
</template>

<script lang="ts" setup>
import Login from 'assets/login.svg'
import { reactive, ref } from 'vue'

interface LoginUser {
  username: string;
  password: string;
  remember: boolean;
}

const form = reactive<LoginUser>({
  username: '',
  password: '',
  remember: false
})
const showPassword = ref<boolean>(true)

</script>

<style scoped>

</style>
