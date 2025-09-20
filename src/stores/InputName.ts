import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNameStore = defineStore('name', () => {

  const nameValue = ref<string>()
  const nameErrors = ref<string>()
  const nameSuccess = ref<boolean>(false)
  const isNameValid = ref<boolean>(false)

  function onSubmitName(name: string | undefined): void {
    if (nameValidator(name)) {
      nameSuccess.value = true
      nameErrors.value = ''
      nameValue.value = ''
    }
  }

  function nameValidator(name: string | undefined): boolean {
    if (name === undefined || name.trim() === '') {
      nameErrors.value = 'Your name please'
      isNameValid.value = false
      return false
    }

    if (name.trim().length < 2) {
      nameErrors.value = 'Name must be at least 2 characters long'
      isNameValid.value = false
      return false
    }

    if (name.trim().length > 50) {
      nameErrors.value = 'Name must be less than 50 characters'
      isNameValid.value = false
      return false
    }

    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя\s\-']+$/
    if (!nameRegex.test(name.trim())) {
      nameErrors.value = 'Name can contain only letters, spaces, hyphens and apostrophes'
      isNameValid.value = false
      return false
    }

    if (/\s{2,}/.test(name)) {
      nameErrors.value = 'Name cannot contain consecutive spaces'
      isNameValid.value = false
      return false
    }

    if (name !== name.trim()) {
      nameErrors.value = 'Name cannot start or end with spaces'
      isNameValid.value = false
      return false
    }

    if (!/[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]/.test(name)) {
      nameErrors.value = 'Name must contain at least one letter'
      isNameValid.value = false
      return false
    }

    nameErrors.value = ''
    isNameValid.value = true
    return true
  }

  function formatName(name: string | undefined): string {
    if (!name) return ''

    return name
      .trim()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
  }

  function clearNameForm(): void {
    nameValue.value = ''
    nameErrors.value = ''
    nameSuccess.value = false
    isNameValid.value = false
  }

  const getFormattedName = () => formatName(nameValue.value)
  const hasNameError = () => Boolean(nameErrors.value)

  return {
    nameValue,
    nameErrors,
    nameSuccess,
    isNameValid,

    onSubmitName,
    nameValidator,
    formatName,
    clearNameForm,

    getFormattedName,
    hasNameError
  }
})
