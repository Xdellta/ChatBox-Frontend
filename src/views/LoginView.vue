<script setup lang="ts">
  import { ref } from 'vue';
  import InputData from '@/components/AuthView/inputData.vue';
  import Checkbox from '@/components/AuthView/checkbox.vue';
  import BtnConfirm from '@/components/AuthView/btnConfirm.vue';

  const email = ref('');
  const password = ref('');
  const checked = ref(false);
</script>

<template>
  <InputData v-model="email" type="email" placeholder="Email" />
  <InputData v-model="password" type="password" placeholder="Password" />

  <Checkbox v-model="checked" text="Remember me" />

  <BtnConfirm />
</template>