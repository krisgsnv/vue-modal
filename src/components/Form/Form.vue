<template>
  <form class="form p-3" novalidate @submit.prevent.stop="handlerSubmit">
    <div class="text-fields">
      <div v-for="{ type, props } in fields" :key="props.name" class="form-floating">
        <component :is="type" v-bind="props" v-model="props.value" />
        <label v-if="props.name" class="form-label label" :for="props.name">
          {{ props.label }}
        </label>
        <small v-if="props.additionalText" class="form-text">
          {{ props.additionalText }}
        </small>
      </div>
    </div>

    <div class="form-buttons">
      <slot name="button-submit">
        <button type="button" class="btn btn-light mt-4">Отмена</button>
        <button type="submit" class="btn btn-primary mt-4">Отправить</button>
      </slot>
    </div>
  </form>
</template>

<script setup lang="ts">

interface IVForm {
  fields: {}
  handlerSubmit: (e?: Event) => void
}

defineProps<IVForm>()
</script>

<style>
.text-fields {
  display: grid;
  gap: 8px;
}
.form-buttons {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}
</style>
