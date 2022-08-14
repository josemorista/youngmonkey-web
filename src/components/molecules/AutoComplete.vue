<template>
  <div class="form-container">
    <Input
      :label="label"
      v-model="search"
      type="text"
      placeholder="Digite ou escolha uma opção"
    />
    <div
      class="list-options-container"
      v-if="currentSelected?.label !== search"
    >
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, computed, watchEffect } from 'vue';
import Input from '../atoms/Input.vue';

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

const currentSelected = computed(() =>
  props.options.find((el) => el.value === props.selected)
);

watchEffect(() => {
  search.value = currentSelected.value?.label || '';
});

const filteredOptions = computed(() => {
  return props.options.filter((el) =>
    el.label.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())
  );
});

const onOptionClick = (value: string) => {
  emit('onOptionClick', value);
};
</script>

<style lang="scss" scoped>
div.form-container {
  display: flex;
  flex-direction: column;

  label {
    font-weight: 500;
    font-size: 2rem;
    display: block;
  }

  .list-options-container {
    margin-top: 2rem;
    ul.input-options {
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
    label {
      font-size: 3.2rem;
    }
  }
}
</style>
