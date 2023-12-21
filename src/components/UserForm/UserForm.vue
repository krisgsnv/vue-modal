<script setup lang="ts">
import { Form } from '@/components/Form'
import data from './data'

const formData = [...data]

const handleSubmit = () => {
  console.log(
    Object.fromEntries(
      formData.map(({ props }) => {
        const { name, value } = props
        return [name, value || Number.isFinite(value) ? value : null]
      })
    )
  )
}

const handleCancel = () => {
  console.log('Отмена')
}
</script>

<template>
  <Form :fields="formData" :handle-submit="handleSubmit" :handle-cancel="handleCancel" :columns="2"/>
</template>
