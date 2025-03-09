<script setup lang="ts">
  import { defineModel, ref } from 'vue';
  import EyeIcon from '@/assets/icons/EyeIcon.vue';
  import EyeOffIcon from '@/assets/icons/EyeOffIcon.vue';

  const model = defineModel<string>();
  const type = defineModel<string>('type');
  const placeholder = defineModel<string>('placeholder');

  const passwordField = ref(type.value === 'password');

  function showPassword() {
    type.value = type.value === 'password' ? 'text' : 'password';
  }
</script>

<template>
  <div class="input-wrapper">
    <input
      :type="type"
      v-model="model"
      :placeholder="placeholder"
      required
      :class="{'input-password': type === 'password'}"
    >

    <component
      :is="type === 'password' ? EyeIcon : EyeOffIcon"
      v-show="passwordField"
      class="eye-icon"
      @click="showPassword"
    />
  </div>
</template>

<style scoped>
  .input-wrapper {
    position: relative;
    width: 100%;
    height: 52px;
  }

  input {
    height: 100%;
    width: 100%;
    padding: 0 20px;
  }

  .input-password {
    padding: 0 64px 0 20px;
  }

  input:focus {
    border: 1px solid var(--color-accent-secondary);
  }

  .eye-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    fill: var(--color-input-placeholder);
    transition: 0.2s ease-in-out;

  }

  .eye-icon:hover {
    cursor: pointer;
    fill: var(--color-accent-secondary);
  }
</style>