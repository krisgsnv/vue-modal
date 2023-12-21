<script lang="ts" setup>
import { useRefValue } from '@/use/ref'

interface IOption {
  label: string
  props: {
    value: string | number
    selected?: boolean
    disabled?: boolean
  }
}

interface ISelect {
  modelValue?: string | number
  label?: string
  name?: string
  isDisabled?: boolean
  placeholder?: string
  options: IOption[]
}

const props = withDefaults(defineProps<ISelect>(), {
  modelValue: ''
})

const emit = defineEmits(['update:modelValue', 'change'])
const { value: inputValue, setValue } = useRefValue(props.modelValue)

function onChange(event: Event) {
  const target = event.target as HTMLInputElement
  setValue(target.value)

  emit('change', inputValue.value)
  emit('update:modelValue', target.value)
}
</script>

<template>
  <select class="form-select" :name="name" :value="modelValue" @change="onChange">
    <option
      v-for="{ label, props } in options"
      :key="label"
      v-bind="props"
    >
      {{ label }}
    </option>
  </select>
</template>
