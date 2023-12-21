export interface IOptionProps {
  label: string
  props: {
    value: string | number
    selected?: boolean
    disabled?: boolean
  }
}

export interface ISelectProps {
  modelValue?: string | number
  label?: string
  name?: string
  isDisabled?: boolean
  placeholder?: string
  options: IOptionProps[]
}
