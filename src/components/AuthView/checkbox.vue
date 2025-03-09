<script setup lang="ts">
  import { defineModel } from 'vue';
  import CheckIcon from '@/assets/icons/CheckIcon.vue';

  const checked = defineModel<boolean>();
  const text = defineModel<string>('text');
</script>

<template>
  <label for="checkbox" class="label-checkbox">
    <input
      type="checkbox"
      id="checkbox"
      name="checkbox"
      v-model="checked"
      required
    >
    <span class="custom-checkbox">
      <CheckIcon class="checkbox-icon" />
    </span>

    {{ text }}
  </label>
</template>

<style scoped>
  .label-checkbox {
    width: max-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  .custom-checkbox {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 4px;
    border: 2px solid var(--color-icon-primary);
  }

  input:checked + .custom-checkbox {
    background-color: var(--color-icon-primary);
    border: none;
  }

  .label-checkbox:hover input:not(:checked) + .custom-checkbox {
    border: 2px solid var(--color-accent-secondary);
  }

  .label-checkbox:hover input:checked + .custom-checkbox {
    background-color: var(--color-accent-secondary);
  }

  .checkbox-icon {
    width: 62%;
    height: max-content;
    fill: var(--color-background);
  }
</style>