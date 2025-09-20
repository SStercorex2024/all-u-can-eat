export interface CustomCheckbox {
  type: 'checkbox' | 'radio'
  label: string
  modelValue?: boolean | string | number
  name?: string
  value?: string | number
}
