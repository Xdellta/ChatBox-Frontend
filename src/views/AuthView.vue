<script setup lang="ts">
  
</script>

<template>
  <section class="section-banner"></section>

  <section class="section-auth">
    <form>
      <router-view></router-view>
    </form>
  </section>
</template>

<style scoped>
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .section-banner {
    height: 0%;
    background-color: var(--color-element-primary);
  }

  .section-auth {
    height: 100%;
    padding: 0 6%;
  }

  form {
    position: relative;
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>