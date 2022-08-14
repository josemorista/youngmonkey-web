<template>
  <header>
    <ProgressBar :width="completedPercentage" />
  </header>
  <FlowForm v-if="completedPercentage !== 100" />
  <Success v-if="completedPercentage === 100" />
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import ProgressBar from './components/atoms/ProgressBar.vue';
import { useFormStep } from './compositors/formStep';
import FlowForm from './components/templates/FlowForm.vue';
import Success from './components/templates/Success.vue';

const formStepStore = useFormStep();
const { completedPercentage } = toRefs(formStepStore);
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

label {
  &.custom-input-label {
    font-weight: 500;
    font-size: 2rem;
  }
}

input {
  &.custom-input {
    height: 3rem;
    width: 100%;
    border: 0;
    border-bottom: 2px solid var(--color-primary);

    &::placeholder {
      font-size: 15px;
      color: var(--color-primary-light);
    }
  }
}

@media (min-width: 700px) {
  label {
    &.custom-input-label {
      font-size: 3.2rem;
    }
  }

  input {
    &.custom-input {
      height: 5rem;
      font-size: 2.8rem;
      &::placeholder {
        font-size: 2.8rem;
      }
    }
  }
}
</style>
