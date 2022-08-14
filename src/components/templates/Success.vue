<template>
  <main class="success">
    <img class="logo" src="/assets/logo.svg" alt="logo-young-monkey" />
    <h1>
      Muito obrigado
      {{ formData.name }}!
    </h1>
    <h3>Já estamos com seus dados e logo entraremos em contato.</h3>
  </main>
</template>

<script setup lang="ts">
import { useFormData } from '@/compositors/formData';
const formData = useFormData();
</script>

<style lang="scss" scoped>
@keyframes load-success {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
main.success {
  width: 100%;
  min-height: calc(100vh - 0.8rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;

  animation-name: load-success;
  animation-duration: 1s;

  img {
    width: 17.4rem;
    margin-bottom: 4rem;
  }

  h1 {
    font-size: 2.8rem;
    font-weight: 500;
    text-align: center;
    line-height: 3rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    margin-top: 2rem;
    line-height: 4rem;
  }
}

@media (min-width: 700px) {
  main.success {
    img {
      width: 40rem;
    }

    h1 {
      font-size: 3.6rem;
    }

    h3 {
      font-size: 3rem;
    }
  }
}
</style>
