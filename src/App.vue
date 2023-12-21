<script setup lang="ts">
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { Form } from '@/components/Form'

const data = [
  {
    type: Select,
    props: {
      label: 'Менеджер',
      name: 'manager',
      value: '',
      options: [
        {
          label: 'Нет пользователя',
          props: {
            selected: true,
            disabled: true,
            value: ''
          }
        },
        {
          label: 'Пользователь',
          props: {
            value: 'user1'
          }
        }
      ]
    }
  },
  {
    type: Input,
    props: {
      label: 'Название продукта',
      name: 'productName',
      value: ''
    }
  },
  {
    type: Input,
    props: {
      label: 'Ссылка в Jira',
      name: 'jiraLink',
      additionalText: 'Ссылка в jira, включая https://',
      value: ''
    }
  },
  {
    type: Select,
    props: {
      label: 'Домен',
      name: 'domen',
      value: '',
      options: [
        {
          label: 'Не выбрано',
          props: {
            selected: true,
            disabled: true,
            value: ''
          }
        },
        { label: 'Бэк-офис', props: { value: 'back-office' } },
        {
          label: 'Техплатформа',
          props: { value: 'tech-platform' }
        },
        {
          label: 'Офис больших данных',
          props: { value: 'bigdata-office' }
        },
        {
          label: 'Цифровой опыт поставщика',
          props: { value: 'provider-experience' }
        }
      ]
    }
  }
]

const data2 = [
  {
    type: Input,
    props: {
      label: 'Процент капитализации',
      name: 'capitalization',
      type: 'number',
      value: 0,
      min: 0,
      max: 100,
      step: 1
    }
  },
  {
    type: Input,
    props: {
      label: 'Должность',
      name: 'position',
      value: ''
    }
  }
]
const onSubmit = () => {
  console.log(
    Object.fromEntries(
      data2.map(({ props }) => {
        const { name, value } = props
        return [name, value ]
      })
    )
  )
}
</script>

<template>
  <main>
    <Form :handler-submit="onSubmit" :fields="data2" />
  </main>
</template>

<style>
.label {
  color: rgba(var(--bs-body-color-rgb), 0.65);
}
.form-text {
  font-size: 0.8em;
  margin-left: 1em;
}
.form-select,
.form-control,
.form-label {
  font-size: 0.9em;
}
</style>
