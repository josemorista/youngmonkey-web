<template>
  <header>
    <ProgressBar :width="completedPercentage" />
  </header>
  <main class="main-app">
    <img class="logo" src="/assets/logo.svg" alt="logo-young-monkey" />
    <section class="form">
      <Step1 v-if="currentStep === 1" @on-step-submit="onStepSubmit(1)" />
      <Step2 v-if="currentStep === 2" @on-step-submit="onStepSubmit(2)" />
      <Step3 v-if="currentStep === 3" @on-step-submit="onStepSubmit(3)" />
      <Step4 v-if="currentStep === 4" @on-step-submit="onStepSubmit(4)" />
    </section>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import ProgressBar from './components/atoms/ProgressBar.vue';
import Footer from './components/molecules/Footer.vue';

import Step1 from './components/organisms/Step1.vue';
import Step2 from './components/organisms/Step2.vue';
import Step3 from './components/organisms/Step3.vue';
import Step4 from './components/organisms/Step4.vue';
import { useFormStep } from './compositors/formStep';

const formStepStore = useFormStep();
const { onStepSubmit } = formStepStore;
const { currentStep, completedPercentage } = toRefs(formStepStore);
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  box-shadow: none;
  font-size: 62.5%;
  font-family: Montserrat;
}

p,
span,
button,
input,
a,
div,
label,
section,
header,
footer {
  font-size: 1.6rem;
}

h1 {
  font-size: 4rem;
  color: var(--color-primary);
}

:root {
  --color-primary: #25044a;
  --color-primary-light: #25044a80;
  --color-primary-lighter: #25044a1a;

  --color-secondary: #ffdc00;
  --color-disabled: #8c8c8c;
}

main.main-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 0.8rem);
  overflow-y: auto;
  padding: 0 3rem;

  img.logo {
    width: 9rem;
    height: 9rem;
    margin-top: 3rem;
  }

  .form {
    width: 100%;
  }

  footer {
    margin-bottom: 3rem;
  }
}

@media (min-width: 700px) {
  main.main-app {
    flex-direction: row;

    img.logo {
      margin-top: 0;
      margin-left: 8rem;
      width: 11rem;
      height: 11rem;
    }

    .form {
      flex: 1;
      max-width: 80rem;
      justify-self: center;
    }

    footer {
      flex: 0;
      align-self: flex-end;
    }
  }
}
</style>
