<script setup lang="ts">
  import { ref } from 'vue';
  import InputData from '@/components/AuthView/inputData.vue';
  import Checkbox from '@/components/AuthView/checkbox.vue';
  import BtnConfirm from '@/components/AuthView/btnConfirm.vue';

  const firstName = ref('');
  const lastName = ref('');
  const email = ref('');
  const password = ref('');
  const checked = ref(false);
</script>

<template>
  <div class="group-inputs">
    <InputData v-model="firstName" type="text" placeholder="First namer" />
    <InputData v-model="lastName" type="text" placeholder="Last name" />
  </div>

  <InputData v-model="email" type="email" placeholder="Email" />
  <InputData v-model="password" type="password" placeholder="Password" />

  <Checkbox v-model="checked" text="I agree the Terms & Conditions" />

  <BtnConfirm />
</template>

<style scoped>
  .group-inputs {
    width: 100%;
    display: flex;
    gap: 20px;
  }
</style>