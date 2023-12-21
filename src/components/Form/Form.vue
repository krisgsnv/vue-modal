<template>
  <form class="form p-3" novalidate @submit.prevent.stop="handlerSubmit">
    <slot />

    <div class="form__buttons">
      <slot name="button-submit">
        <button type="submit" class="btn btn-primary mt-4">Отправить</button>
      </slot>
    </div>
  </form>
</template>

<script setup lang="ts">
interface IVForm {
  handlerSubmit: (e?: Event) => void
}

defineProps<IVForm>()
</script>
