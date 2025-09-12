<script setup lang="ts">
import OurButton from '@/components/OurButton.vue'
import InputString from '@/components/InputString.vue'
import TicToc from '@/components/icons/TicToc.vue'
import Insta from '@/components/icons/Insta.vue'
import Pinterest from '@/components/icons/Pinterest.vue'
import Facebook from '@/components/icons/Facebook.vue'
import { ref, watch } from 'vue'

const pages = ['About', 'Blog', 'Contact']

const emailValue = ref<string>()
const emailErrors = ref<string>()
const emailSuccess = ref<boolean>(false)
const isEmailValid = ref<boolean>(false)

function omSubmitEmail(email: string | undefined): void {
  if (emailValidator(email)) {
    emailSuccess.value = true
    emailErrors.value = ''
    emailValue.value = ''
  }
}

function emailValidator(email: string | undefined) {
  if (email === undefined) {
    emailErrors.value = 'Your email please'
    isEmailValid.value = false
    return false
  }

  if (!email.includes('@gmail.com')) {
    emailErrors.value = 'We accept only @gmail.com domen'
    isEmailValid.value = false
    return false
  }

  const emailRegex = /^[^\s@]+@gmail\.com$/
  if (!emailRegex.test(email)) {
    emailErrors.value = 'Неверный формат email'
    isEmailValid.value = false
    return false
  }

  emailErrors.value = ''
  isEmailValid.value = true
  return true
}

watch(emailValue, (value, oldValue) => {
  if (oldValue !== value) {
    emailErrors.value = ''
  }
})
</script>

<template>
  <footer class="footer">
    <div class="footer__head">
      <div class="container">
        <div class="footer__head-content">
          <h1 class="footer__head-title">Want more recipes straight to your inbox?</h1>
          <form class="form">
            <label class="footer__form-label" for="email"> Sign up for the newsletter. </label>
            <InputString v-model="emailValue" type="email" placeholder="Goy@gmail.com" />
            <OurButton
              @click.prevent="omSubmitEmail(emailValue)"
              class="footer__form-submit"
              :is-submit="true"
            >
              SUBMIT
            </OurButton>
            <p v-if="emailErrors" class="form-error">{{ emailErrors }}</p>
            <p v-if="emailSuccess" class="form-success">Success! We already send letter for u</p>
          </form>
        </div>
      </div>
    </div>
    <div class="footer__body">
      <div class="container">
        <div class="footer__body-content">
          <RouterLink class="footer__logo" :to="{ name: 'home' }">
            ALL YOU<br />
            CAN EAT
          </RouterLink>
          <div class="footer__body-row">
            <ul class="footer__body-pages">
              <li v-for="page in pages" :key="page">
                <RouterLink
                  class="footer__body-page"
                  active-class="footer__body-page-active"
                  :to="{ name: page.toLowerCase() }"
                >
                  {{ page }}
                </RouterLink>
              </li>
            </ul>
            <ul class="footer__social-list">
              <li class="footer__social-item">
                <a href="#">
                  <TicToc />
                </a>
              </li>
              <li class="footer__social-item">
                <a href="#">
                  <Insta />
                </a>
              </li>
              <li class="footer__social-item">
                <a href="#">
                  <Pinterest />
                </a>
              </li>
              <li class="footer__social-item">
                <a href="#">
                  <Facebook />
                </a>
              </li>
            </ul>
          </div>
          <div class="footer__body-row">
            <p>Style Guide Changelog Licenses</p>
            <a href="#">Website template by Callisto Digital Studio. Powered by Webflow. </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
}

.footer__head {
  padding-block: 80px;
  background-color: var(--color-yellow);
}

.footer__head-content {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
}

.footer__head-title {
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-blue);
}

.form {
  position: relative;
  max-width: 373px;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.form-error {
  position: absolute;
  bottom: -24px;
  left: 0;
  color: red;
  font-size: 14px;
}

.form-success {
  position: absolute;
  bottom: -24px;
  left: 0;
  color: var(--color-gray);
  font-size: 14px;
}

.footer__form-label {
  font-size: 24px;
  line-height: 1.6;
  color: var(--color-blue);
}

.footer__form-submit {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: var(--height-button-m);
  border: 1px solid var(--color-blue);
  font-size: 14px;
  line-height: 1.4;
  font-weight: 500;
  transition: var(--transition-duration);
  border-radius: var(--border-radius-m);
}

.footer__form-submit:hover {
  color: var(--color-blue);
}

.footer__body {
  background-color: var(--color-blue);
  padding-block: 80px 40px;
}

.footer__body-content {
  display: flex;
  row-gap: 40px;
  flex-direction: column;
}

.footer__logo {
  display: block;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
  line-height: 0.75;
  color: var(--color-white);
  font-size: 64px;
}

.footer__body-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.footer__body-pages,
.footer__social-list {
  display: flex;
  column-gap: 16px;
}

.footer__body-page {
  color: var(--color-white);
  font-size: 20px;
  font-weight: 700;
}

.footer__body-page-active {
  opacity: 0.75;
}

.footer__social-item {
  svg {
    width: 24px;
    height: 24px;
    color: var(--color-white);
  }

  svg:hover {
    color: var(--color-yellow);
  }
}

.footer__body-row {
  p,
  a {
    margin: 0;
    line-height: 1.6;
    font-size: 14px;
    color: var(--color-white);
  }
}
</style>
