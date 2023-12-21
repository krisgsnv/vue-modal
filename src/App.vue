<script setup lang="ts">
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { Form } from '@/components/Form'

const onSubmit = (e?: Event) => {
  const formData = new FormData(e?.target as HTMLFormElement)
  const dataArray = [...formData]
  const data = Object.fromEntries(dataArray)
  console.log(data)
}

const data = [
  {
    type: Input,
    props: {
      label: 'Имя',
      name: 'name'
    }
  },
  {
    type: Select,
    props: {
      label: 'Возраст',
      name: 'age'
    }
  }
]
</script>

<template>
  <main>
    <Form :handler-submit="onSubmit">
      <div v-for="item in data" :key="item.props.name" class="form-floating mt-2">
        <component :is="item.type" v-bind="item.props" />
        <label v-if="item.props.name" class="form-label" :for="item.props.name">
          {{ item.props.label }}
        </label>
      </div>
      <input type="number" class="form-control" name="gender" />
    </Form>
  </main>
</template>
