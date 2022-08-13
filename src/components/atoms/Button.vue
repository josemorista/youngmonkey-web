<template>
  <button>
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.5rem;
  padding: 0 1.8rem;
  background-color: var(--color-primary);
  color: var(--color-secondary);
  font-weight: 700;

  border-radius: 6px;
  font-size: 15px;

  border: 0;
  outline: none;
}
</style>
