import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmailStore = defineStore('email', () => {

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

  return { omSubmitEmail, emailValidator, emailValue, emailErrors, emailSuccess, isEmailValid}
})
