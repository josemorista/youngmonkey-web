<template>
  <header>
    <ProgressBar :width="completedPercentage" />
  </header>
  <main class="main-app">
    <img class="logo" src="/assets/logo.svg" alt="logo-young-monkey" />
    <section class="form">
      <Step1
        :initial-value="formData.name"
        v-if="currentStep === 1"
        @on-step-submit="onStepSubmit(1, $event)"
      />
      <Step2
        :name="formData.name"
        :initial-value="formData.enterprise"
        v-if="currentStep === 2"
        @on-step-submit="onStepSubmit(2, $event)"
      />
      <Step3 v-if="currentStep === 3" :initial-value="[]" />
    </section>
    <Footer
      :current-step="currentStep"
      :highest-step="highestStep"
      @on-before-click="onBeforeClick"
      @on-next-click="onNextClick"
    />
  </main>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
import ProgressBar from './components/atoms/ProgressBar.vue';
import Step1 from './components/organisms/Step1.vue';
import Footer from './components/molecules/Footer.vue';
import Step2 from './components/organisms/Step2.vue';
import Step3 from './components/organisms/Step3.vue';

const currentStep = ref(1);
const highestStep = ref(1);
const completedPercentage = computed(() => ((highestStep.value - 1) / 7) * 100);

const formData = reactive({
  name: '',
  enterprise: '',
});

const onBeforeClick = () => {
  currentStep.value--;
};

const onNextClick = () => {
  currentStep.value++;
};

const onStepSubmit = (step: number, value: string) => {
  switch (step) {
    case 1: {
      formData.name = value;
      break;
    }
    case 2: {
      formData.enterprise = value;
      break;
    }
  }
  if (step === highestStep.value) {
    highestStep.value++;
  }
  onNextClick();
};
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
  --color-secondary: #ffdc00;
  --color-disabled: #e5e5e5;
}

main.main-app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 0.8rem);
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
