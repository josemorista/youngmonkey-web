<template>
  <div class="form-container">
    <label for="" class="custom-input-label">{{ label }}</label>
    <input
      autocomplete="off"
      type="text"
      :readonly="isMobile"
      class="custom-input"
      v-model="search"
      @click="toggleSelectionOpen"
    />
    <div class="list-options-container" v-if="isSelectionOpen">
      <img @click="toggleSelectionOpen" src="/assets/arrow.svg" alt="arrow" />
      <section>
        <input
          type="text"
          autocomplete="off"
          v-model="search"
          class="custom-input"
          placeholder="Digite ou escolha uma opção"
        />
        <ul class="input-options">
          <li
            v-for="option of filteredOptions"
            :key="option.value"
            :class="{
              ['input-option']: true,
              selected: option.value === selected,
            }"
            @click="onOptionClick(option.value)"
          >
            <span class="input-label">
              {{ option.label }}
            </span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  ref,
  computed,
  watchEffect,
  onMounted,
  onUnmounted,
} from 'vue';

interface MultipleInputProps {
  label: string;
  selected: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

interface MultipleInputEmits {
  ($event: 'onOptionClick', value: string): void;
}

const props = defineProps<MultipleInputProps>();
const emit = defineEmits<MultipleInputEmits>();

const search = ref('');
const isSelectionOpen = ref(false);
const isMobile = ref(true);

const currentSelected = computed(() =>
  props.options.find((el) => el.value === props.selected)
);

watchEffect(() => {
  search.value = currentSelected.value?.label || '';
});

const onResize = () => {
  if (window.innerWidth >= 700) {
    isMobile.value = false;
  } else {
    isMobile.value = true;
  }
};

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

const filteredOptions = computed(() => {
  return props.options.filter((el) =>
    el.label.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
});

const onOptionClick = (value: string) => {
  toggleSelectionOpen();
  search.value = '';
  emit('onOptionClick', value);
};

const toggleSelectionOpen = () => {
  isSelectionOpen.value = !isSelectionOpen.value;
};
</script>

<style lang="scss" scoped>
div.form-container {
  display: flex;
  flex-direction: column;

  .list-options-container {
    z-index: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    padding: 3rem;

    display: flex;
    align-items: flex-start;
    gap: 1rem;

    > img {
      width: 1.2rem;
      transform: rotate(180deg);
    }

    > section {
      flex: 1;
    }

    ul.input-options {
      margin-top: 2rem;
      li {
        display: flex;
        cursor: pointer;
        justify-content: space-between;
        align-items: center;
        padding: 1.6rem;
        font-size: 1.6rem;
        color: var(--color-primary);
        background-color: var(--color-primary-lighter);
        border: 1px solid var(--color-primary);
        border-radius: 10px;
        margin-bottom: 1rem;
        transition: background 0.25s;

        &.selected {
          background-color: var(--color-primary-light);
        }
      }
    }
  }
}

@media (min-width: 700px) {
  div.form-container {
    .list-options-container {
      display: block;
      position: relative;
      width: auto;
      height: auto;
      padding: 0;

      input {
        display: none;
      }

      > img {
        display: none;
      }
    }
  }
}
</style>
