<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import InputString from '@/components/InputString.vue'
import CustomSelect from '@/components/CustomSelect.vue'
import CustomCheckox from '@/components/CustomCheckox.vue'
import OurButton from '@/components/OurButton.vue'
import { useEmailStore } from '@/stores/EmailStore'
import { useNameStore } from '@/stores/InputName'

const emailStore = useEmailStore()
const nameStore = useNameStore()

const formData = ref({
  name: '',
  email: '',
  selectOption: '',
  radioOption: '',
  checkboxOptions: {
    selected: false,
    xSmall: false,
  },
  message: '',
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const messageErrors = ref('')
const validateMessage = (message: string) => {
  if (!message.trim()) {
    messageErrors.value = 'Message is required'
    return false
  }
  if (message.trim().length < 10) {
    messageErrors.value = 'Message must be at least 10 characters long'
    return false
  }
  if (message.trim().length > 1000) {
    messageErrors.value = 'Message must be less than 1000 characters'
    return false
  }
  messageErrors.value = ''
  return true
}

const isFormValid = computed(() => {
  return nameStore.isNameValid && emailStore.isEmailValid && !messageErrors.value
})

watch(isFormValid, (newVal) => {
  console.log('isFormValid:', newVal)
  console.log('nameStore.isNameValid:', nameStore.isNameValid)
  console.log('emailStore.isEmailValid:', emailStore.isEmailValid)
})

const handleSubmit = async () => {
  console.log('handleSubmit called')
  nameStore.nameValidator(formData.value.name)
  emailStore.emailValidator(formData.value.email)
  validateMessage(formData.value.message)

  if (!isFormValid.value) {
    submitError.value = 'Please fix all errors before submitting'
    console.log('Form invalid')
    return
  }

  isSubmitting.value = true
  submitError.value = ''

  try {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    nameStore.onSubmitName(formData.value.name)
    emailStore.onSubmitEmail(formData.value.email)
    submitSuccess.value = true
    resetForm()
  } catch (error) {
    submitError.value = `${error} to submit form. Please try again.`
    console.log('Submit error:', error)
  } finally {
    isSubmitting.value = false
    console.log('Submit finished')
  }
}

const resetForm = () => {
  nameStore.clearNameForm()
  emailStore.emailValue = ''
  emailStore.emailErrors = ''
  emailStore.emailSuccess = false
  emailStore.isEmailValid = false
  messageErrors.value = ''

  formData.value = {
    name: '',
    email: '',
    selectOption: '',
    radioOption: '',
    checkboxOptions: {
      selected: false,
      xSmall: false,
    },
    message: '',
  }

  submitError.value = ''
}

watch(
  () => formData.value.name,
  (newName) => {
    if (!submitSuccess.value) {
      nameStore.nameValue = newName
      nameStore.nameValidator(newName)
    }
  },
)

watch(
  () => formData.value.email,
  (newEmail) => {
    if (!submitSuccess.value) {
      emailStore.emailValidator(newEmail)
    }
  },
)

watch(
  () => formData.value.message,
  (newMessage) => {
    if (!submitSuccess.value) {
      validateMessage(newMessage)
    }
  },
)

watch(submitSuccess, (newVal) => {
  if (newVal) {
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  }
})
</script>

<template>
  <div class="contact">
    <div class="container">
      <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
        <div class="contact-form__half-inputs">
          <div class="input-with-error">
            <InputString
              v-model="formData.name"
              type="text"
              placeholder="John Doe"
              :class="{ 'input-error': nameStore.nameErrors }"
            />
            <span v-if="nameStore.nameErrors" class="error-message">
              {{ nameStore.nameErrors }}
            </span>
          </div>
          <div class="input-with-error">
            <InputString
              v-model="formData.email"
              type="email"
              placeholder="goy@gmail.com"
              :class="{ 'input-error': emailStore.emailErrors }"
            />
            <span v-if="emailStore.emailErrors" class="error-message">
              {{ emailStore.emailErrors }}
            </span>
          </div>
        </div>
        <div class="input-with-error">
          <CustomSelect
            v-model="formData.selectOption"
            default="Choose an option."
            :options="['Your option 1', 'Your option 2', 'Your option 3', 'Your option 4']"
            :class="{ 'input-error': !formData.selectOption && submitError }"
          />
        </div>
        <div class="contact-form__checkbox-wrapper">
          <fieldset>
            <legend class="contact-form__checkbox-title">Choose an option.</legend>
            <div class="contact-form__inputs-wrapper">
              <CustomCheckox
                v-model="formData.radioOption"
                type="radio"
                name="radio-group-1"
                value="selected"
                label="Selected"
              />
              <CustomCheckox
                v-model="formData.radioOption"
                type="radio"
                name="radio-group-1"
                value="default"
                label="Default"
              />
            </div>
          </fieldset>
        </div>
        <div class="contact-form__checkbox-wrapper">
          <fieldset>
            <legend class="contact-form__checkbox-title">Choose multiple options.</legend>
            <div class="contact-form__inputs-wrapper">
              <CustomCheckox
                v-model="formData.checkboxOptions.selected"
                type="checkbox"
                label="Small"
              />
              <CustomCheckox
                v-model="formData.checkboxOptions.xSmall"
                type="checkbox"
                label="X Small"
              />
            </div>
          </fieldset>
        </div>
        <div class="input-with-error">
          <textarea
            v-model="formData.message"
            name="message"
            id="message"
            placeholder="Message"
            :class="{ 'input-error': messageErrors }"
          />
          <span v-if="messageErrors" class="error-message">
            {{ messageErrors }}
          </span>
        </div>
        <OurButton
          class="contact-form__submit"
          :class="{
            'button-loading': isSubmitting,
          }"
          :is-submit="true"
        >
          <span v-if="isSubmitting">Sending...</span>
          <span v-else>Send Message</span>
        </OurButton>
        <div v-if="submitSuccess" class="alert alert-success">
          ✅ Form submitted successfully! Thank you for your message.
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.input-with-error {
  width: 100%;
}

.input-error {
  border-color: red;
}

.contact {
  padding-block: 80px 90px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.contact-form__half-inputs {
  display: flex;
  column-gap: 20px;
}

.contact-form__checkbox-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 6px;
}

fieldset {
  border: none;
  padding: 0;
  margin: 0;
  min-width: 0;
}

textarea {
  padding: 8px 16px;
  margin: 0;
  min-height: 180px;
  width: 100%;
  max-width: 90vw;

  border: none;
  border-radius: var(--border-radius-m);
  border-bottom: 2px solid var(--color-black);
}

.contact-form__submit {
  text-transform: uppercase;
  color: var(--color-blue);
  align-self: center;
  padding-inline: 14px;
  height: var(--height-button-l);
  border: 1px solid var(--color-blue);
  border-radius: var(--border-radius-m);
  transition: var(--transition-duration);
}

.contact-form__submit:hover {
  border-color: var(--color-yellow);
}

.alert {
  font-size: 16px;
  text-align: center;
}

@media (max-width: 724px) {
  .contact-form__half-inputs {
    flex-direction: column;
    row-gap: 14px;
  }
}
</style>
