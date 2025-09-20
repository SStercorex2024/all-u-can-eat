import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useEmailStore = defineStore('email', () => {
  const emailValue = ref<string>()
  const emailErrors = ref<string>()
  const emailSuccess = ref<boolean>(false)
  const isEmailValid = ref<boolean>(false)

  function onSubmitEmail(email: string | undefined): void {
    if (emailValidator(email)) {
      emailSuccess.value = true
      emailErrors.value = ''
      emailValue.value = ''
    }
  }

  function emailValidator(email: string | undefined) {
    if (email === undefined || email.trim() === '') {
      emailErrors.value = 'Your email please'
      isEmailValid.value = false
      return false
    }

    const normalizedEmail = email.trim().toLowerCase()

    if (!normalizedEmail.endsWith('@gmail.com')) {
      emailErrors.value = 'We accept only @gmail.com domain'
      isEmailValid.value = false
      return false
    }

    const emailRegex = /^[^\s@]+@gmail\.com$/
    if (!emailRegex.test(normalizedEmail)) {
      emailErrors.value = 'Invalid email format'
      isEmailValid.value = false
      return false
    }

    emailErrors.value = ''
    isEmailValid.value = true
    emailValue.value = normalizedEmail
    return true
  }

  return {
    onSubmitEmail,
    emailValidator,
    emailValue,
    emailErrors,
    emailSuccess,
    isEmailValid,
  }
})
